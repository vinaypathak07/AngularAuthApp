import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserForm: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.loginUserForm = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    });
  }

  userLogIn() {
    console.log(this.loginUserForm);
    this.authService.loginUser(this.loginUserForm.value)
                    .subscribe(
                      (response) => {
                        console.log(response);
                      },
                      (error) => {
                        console.log(error);
                      }
                    );
  }
}
