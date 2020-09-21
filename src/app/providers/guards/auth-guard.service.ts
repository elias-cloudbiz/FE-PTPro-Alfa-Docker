import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';
import { SharingService } from '../guards/sharing.service';
@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router, private account: SharingService) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.router.navigate(['/']);
      return false;
    }
    this.account.isUserLoggedIn.next(true);
    return true;
  }
}

@Injectable()
export class AuthGuardRouteService implements CanActivate {
  constructor(public auth: AuthService, public router: Router, private account: SharingService) {}
  canActivate(): boolean {
    if (!this.auth.isAuthenticated()) {
      this.account.isUserLoggedIn.next(false);
    } else {
    this.account.isUserLoggedIn.next(true);
    }
    return true;
  }
}
