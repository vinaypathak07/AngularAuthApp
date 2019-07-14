import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) {}
  canActivate(): boolean {
    if ( this.authService.loggedIn()) {
        return true;
    } else {
      this.router.navigate(['/login'], {relativeTo: this.route});
      return false;
    }
  }
}
