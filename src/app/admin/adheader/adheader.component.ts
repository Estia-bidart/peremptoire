import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/_services/token.service';
import jwt_decode from 'jwt-decode';

@Component({
  selector: 'app-adheader',
  templateUrl: './adheader.component.html',
  styleUrls: ['./adheader.component.css']
})
export class AdheaderComponent implements OnInit {

  nom= '';
  prenom = '';
  exp = 0;

  constructor(
    private tokenService: TokenService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let test:any = jwt_decode(this.tokenService.getStringToken());
    console.log(test);
    this.nom = test['nom'];
    this.prenom = test['prenom'];
    this.exp = test['exp']*1000;
  }

  logout():void{
    this.tokenService.clearToken();
    this.router.navigate(['/auth/login']);
  }

}
