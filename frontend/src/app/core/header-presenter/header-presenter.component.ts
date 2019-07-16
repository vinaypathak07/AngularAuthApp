import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'header-presenter',
  templateUrl: './header-presenter.component.html',
  styleUrls: ['./header-presenter.component.css']
})
export class HeaderPresenterComponent {

  constructor(private authService: AuthService) { }

  onLogOut() {
    this.authService.logOut();
  }

  checkLoginStatus() {
    return this.authService.loggedIn();
  }
}
