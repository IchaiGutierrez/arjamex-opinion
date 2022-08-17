//service provides methods to access public and protected resources
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
//api backend url
const API_URL = 'http://localhost:8080/api/test/';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', {responseType: 'text'});
  }
  //dashboard for read-only (consulta) user
  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', {responseType: 'text'});
  }
  //dashboard for data input (capturista) user
  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', {responseType: 'text'});
  }
  //dashboard for admin (admin) user
  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', {responseType: 'text'});
  }
}