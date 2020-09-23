import {
   HttpEvent,
   HttpHandler,
   HttpInterceptor,
   HttpRequest,
   HttpResponse,
   HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, pipe, throwError } from 'rxjs';
import { delay, dematerialize, materialize, mergeMap } from 'rxjs/operators';
import { Role } from '../admin/user-list/list/role';
import { User, USER_LIST } from '../admin/user-list/list/user-list';

const users: User[] = USER_LIST;

@Injectable()
export class FakeBackend implements HttpInterceptor {
   intercept(
      request: HttpRequest<any>,
      next: HttpHandler
   ): Observable<HttpEvent<any>> {
      const { url, method, headers, body } = request;

      return handleRoute();

      function handleRoute() {
         switch (true) {
            case url.endsWith('/users/authenticate') && method === 'POST':
               return authenticate();
            case url.endsWith('/users') && method === 'GET':
               return getUsers();
            case url.match(/\/users\/\d+$/) && method === 'GET':
               return getUserById();
            default:
               return next.handle(request);
         }
      }

      function authenticate(): any {
         const {username, password} = body;
         const user = users.find(
            x => x.userName === username && x.password === password
         );

         if (!user) { return error('username or password incorrect'); }

         return ok({
            id: user.id,
            username: user.userName,
            lastName: user.lastName,
            password: user.password,
            phone: user.phone,
            Role: user.role,
            token: `fake-jwt-token.${user.id}`
         });
      }

      function getUsers(): any {
         if (!isAdmin()) { return unauthorized(); }
         return ok(users);
      }

      function getUserById(): any {
         if (!isLoggedIn()) { return unauthorized(); }
         if (!isAdmin() && currentUser().id !== idFromUrl()) {
            return unauthorized();
         }

         const user = users.find(x => x.id === idFromUrl());
         return ok(user);
      }

      function ok(body): any {
         return of(new HttpResponse({status: 200, body}))
            .pipe(delay(500));
      }

      function unauthorized(): any {
         return throwError({ status: 401, error: {message: 'unauthorized'} })
            .pipe(materialize(), delay(500), dematerialize());
      }

      function error(message): any {
         return throwError({ status: 400, error: {message}})
            .pipe(materialize(), delay(500), dematerialize());
      }

      function isLoggedIn(): any{
         const authHeader = headers.get('Authorization') || '';
         return authHeader.startsWith('Bearer fake-jwt-token');
      }

      function isAdmin(): any{
         return isLoggedIn() && currentUser().role === Role.Admin;
      }

      function currentUser(): any {
         if (!isLoggedIn()) { return; }
         // tslint:disable-next-line: radix
         const id = parseInt(headers.get('Authorization').split('.')[1]);
         return users.find(x => x.id === id);
      }

      function idFromUrl(): any {
         const urlParts = url.split('/');
         // tslint:disable-next-line: radix
         return parseInt(urlParts[urlParts.length - 1]);
      }
   }
}

export const fakeBackendProvider = {
   provide: HTTP_INTERCEPTORS,
   useClass: FakeBackend,
   multi: true
};

