import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  endPoint = 'http://localhost:64100/'

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any>{
    return this.http.get(this.endPoint+'users')
  }
}
