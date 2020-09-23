import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../service/auth.service';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

   constructor(private authService: AuthService){}

   intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

      const user = this.authService.userValue;
      const isLoggedIn = user && user.token;
      const isApiUrl = req.url.startsWith(environment.apiUrl);

      if (isLoggedIn && isApiUrl) {
         req = req.clone({
            setHeaders: {
               Authorization: `Bearer ${user.token}`
            }
         });
      }

      return next.handle(req);
   }
}
