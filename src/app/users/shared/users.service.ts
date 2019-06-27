import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  apiUrl = 'http://128.199.167.160:3000/api/v1/users';
  header = { 'Content-type': 'application/json' };
  authHeader  = { 'Content-type': 'application/json', 'x-access-token': localStorage.getItem('token') };

  constructor(private http: HttpClient) { }
  getAll(): Observable<Users> {
    return this.http.get<Users>( this.apiUrl, {headers: this.header});
  }

  deleteUser(id) {
    return this.http.delete( this.apiUrl + '/' + id, {headers: this.header})
  }
}
