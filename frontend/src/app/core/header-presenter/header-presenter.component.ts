import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'header-presenter',
  templateUrl: './header-presenter.component.html',
  styleUrls: ['./header-presenter.component.css']
})
export class HeaderPresenterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
