import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NonAuthGuard implements CanActivate {
  constructor(private router: Router) { }

    canActivate() {
        if (localStorage.getItem('isLoggedin')) {
            this.router.navigate(['/']);
            return true;
        }
        return true;
    }
}
