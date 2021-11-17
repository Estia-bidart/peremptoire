import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ICocktailsss } from '../_interfaces/i-cocktail';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  endPoint = 'http://localhost:64100/'

  constructor(private http: HttpClient) { }

  getAllCocktails(){
    return this.http.get<ICocktailsss>(this.endPoint+'cocktails')
    
  }


}
