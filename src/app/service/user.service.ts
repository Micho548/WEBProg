import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from '../admin/user-list/list/user-list';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getAll(): any {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  getById(id: number): any {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }
}
