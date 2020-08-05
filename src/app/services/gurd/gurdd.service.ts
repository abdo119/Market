import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {fromPromise} from 'rxjs/internal-compatibility';
import {AuthService} from '../auth.service';
import {canActivate} from '@angular/fire/auth-guard';

@Injectable({
  providedIn: 'root'
})
export class GurddGurd implements CanActivate{

  constructor(private gurd: AuthService , private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return new Promise(resolve => {
      this.gurd.userState.subscribe(userState => {
        if (userState){resolve(true); }
        else {
          this.router.navigate(['/login']);
          resolve(false);
        }
      });
    });
  }
}
