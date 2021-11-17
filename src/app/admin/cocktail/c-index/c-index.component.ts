import { Component, OnInit } from '@angular/core';
import { ICocktailss, ICocktailsss } from 'src/app/_interfaces/i-cocktail';
import { ApiService } from 'src/app/_services/api.service';

@Component({
  selector: 'app-c-index',
  templateUrl: './c-index.component.html',
  styleUrls: ['./c-index.component.css']
})
export class CIndexComponent implements OnInit {
  list: any

  constructor(private api: ApiService) { }

  ngOnInit(): void {

      this.api.getAllCocktails().subscribe(
        roger => {
          console.log(roger.data)
          this.list = roger.data
        },
        err => console.log(err)
      )
    
  }

}
