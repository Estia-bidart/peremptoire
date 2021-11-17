import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../_services/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private tokenService: TokenService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    console.log(request);
    let token = this.tokenService.getToken();

    if(token !== null){
      let clone = request.clone({
        headers: request.headers.set('Authorization', 'bearer '+token)
      });
      console.log(clone);
      return next.handle(clone);

      /*return next.handle(clone).pipe(
        tap(
          event => console.log(event),  
          error => {
            console.log(error.status)
            if(error.status === 401){
              console.log('ok')
            }
          }

        )
      )*/
    }else{
      return next.handle(request);
    }
  }
}

export const TokenInterceptorProvider = [{
  provide: HTTP_INTERCEPTORS,
  useClass: TokenInterceptor,
  multi: true
}]
