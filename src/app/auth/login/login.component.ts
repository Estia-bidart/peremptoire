import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/_services/auth.service';
import { TokenService } from 'src/app/_services/token.service';


interface IToken{
  access_token: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {
    email: null,
    password: null
  }

  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];

  constructor(
    private authService: AuthService,
    private tokenService: TokenService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  onSubmit(): void{
    // console.log(this.form);

    const { email, password } = this.form;

    this.authService.login(email, password).subscribe(
      (data) => {
          // console.log(data)
          // Pas d'erreur donc on enregistre le token et on redirige vers admin
          this.tokenService.saveToken(data.access_token);
          this.router.navigate(['/admin/dashboard'])
      },
      (error) => console.error(error)
    );
  }

}
