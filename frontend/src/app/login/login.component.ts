import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserForm: FormGroup;
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

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
                      (response: any) => {
                        console.log(response);
                        localStorage.setItem('token', response.token);
                        this.router.navigate(['/special'], {relativeTo: this.route});
                      },
                      (error) => {
                        console.log(error);
                      }
                    );
  }
}
