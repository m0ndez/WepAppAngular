import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, Subject} from 'rxjs';
import {Users} from './users.model';
import {tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  apiUrl = 'http://128.199.167.160:3000/api/v1/users';
  header = {'Content-type': 'application/json'};
  authHeader = {'Content-type': 'application/json', 'x-access-token': localStorage.getItem('token')};

  constructor(private http: HttpClient) {
  }
  _getReflesh = new Subject<void>()
  _GetUpdate = new Subject<string>()
  get getUpdate() {
    return this._GetUpdate;
  }
  get getReflesh() {
    return this._getReflesh;
  }
  getAll(): Observable<Users> {
    return this.http.get<Users>(this.apiUrl, {headers: this.header})
  }

  deleteUser(id) {
    return this.http.delete(this.apiUrl + '/' + id, {headers: this.header}).pipe(
      tap(() => {
        this._getReflesh.next()
      })
    )
  }

  createUser(createForm: Users) {
    const body = {
      'firstname': createForm.firstname,
      'lastname': createForm.lastname,
      'phonenumber': createForm.phonenumber,
      'email': createForm.email
    }
    // console.log(createForm)
    return this.http.post<Users>(this.apiUrl, body, {headers: this.header}).pipe(
      tap(() => {
        this._getReflesh.next()
      })
    )
  }
}
