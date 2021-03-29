import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './user.service';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,  } from '@angular/router';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class  AuthGuard implements CanActivate {
  constructor(private userservice:UserService,
    private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
   if(this.userservice.loginIn()){
     return true;
   }

   //navigate login page
   this.router.navigate(['/login']);
   return false;
   }
    }


