import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserModule } from './user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  _headers: HttpHeaders;

  constructor(private http: HttpClient) { 
    this._headers = new HttpHeaders();
    this._headers.append('Content-Type', 'application/json');
    this._headers.append('Access-Control-Allow-Methods', 'GET, POST, PATCH, PUT, DELETE, OPTIONS');
    this._headers.append('Access-Control-Allow-Origin', '*');
    this._headers.append('Access-Control-Allow-Headers', 'Origin, Content-Type, X-Auth-Token');
  }

  getUsersList(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.baseUrl}/users/`, {headers: this._headers});
  }

  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${environment.baseUrl}/user/${userId}`, {headers: this._headers});
  }
}
