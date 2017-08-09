/**
 * Created by idea on 06/04/2017.
 */
import { Injectable } from '@angular/core';
import { Router, CanActivate,RouterStateSnapshot,ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private router: Router) {}

    canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot) {
        var timestamp = Math.round(Date.now() / 1000);
        if (localStorage.getItem('Access-Token')) {
            return true;
        }
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}