import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endPoint = 'http://localhost:64100/'

  constructor(private http: HttpClient) { }


  login(email: string, password: string): Observable<any>{
    return this.http.post(this.endPoint + 'auth/login', {
      email,
      password
    })
  }

  logout(){
    
  }
  

}
