import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  saveToken(token: string): void{
    localStorage.setItem('token', token);
  }

  getToken() : string | null {
    const token = localStorage.getItem('token');
    if(!!token){
      return token
    }else{
      return null
    }
  }

  getStringToken(): string{
    const token = localStorage.getItem('token')
    if(!!token){
      return token
    }else{
      return ''
    }
  }

  asToken(): boolean{
    const token = localStorage.getItem('token');
    return !!token;
  }

  clearToken(): void{
    localStorage.removeItem('token');
  }
}
