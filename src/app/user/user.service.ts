import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from './user.model';
import { HttpClient } from '@angular/common/http';
import { UserModule } from './user.module';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsersList(): Observable<User[]> {
    return this.http.get<User[]>(`${environment.baseUrl}/users/`);
  }
}
