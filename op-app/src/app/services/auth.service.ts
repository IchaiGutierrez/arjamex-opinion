import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { LoginComponent } from '../login/login.component';
import { stringify } from 'querystring';
//ubicación de api en backend
const AUTH_API = 'http://localhost:8080/api/auth';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) {}
  //login with username and password variables
  login(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signin', {
      username,
      password
    }, httpOptions);
  }
  //register with username and password variables
  register(username: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      password
    }, httpOptions)
  }
}
