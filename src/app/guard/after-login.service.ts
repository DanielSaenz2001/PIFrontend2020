import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, BehaviorSubject } from 'rxjs';
import { TokenService } from '../servicios/TokenService';
import { JarwisService } from '../servicios/JarwisService';


@Injectable({
  providedIn: 'root'
})
export class AfterLoginService implements CanActivate {
  private loggedIn = new BehaviorSubject<boolean>(this.Token.loggedIn());
  authStatus = this.loggedIn.asObservable();
  

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
    if(!this.Token.loggedIn()){
      this.router.navigateByUrl('/');
    }
    return this.Token.loggedIn();
    
  }
  constructor(private Token: TokenService,private d:JarwisService, private router: Router) { 
    
  }
  

}
