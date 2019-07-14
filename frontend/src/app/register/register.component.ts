import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  constructor(private authService: AuthService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      email : new FormControl(null, Validators.required),
      password : new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.authService.registerUser(this.registrationForm.value)
                    .subscribe((response: any) => {
                      console.log(response);
                      localStorage.setItem('token', response.token);
                      this.router.navigate(['/special'], {relativeTo: this.route});
                    },
                    (error) => {
                      console.log(error);
                    });
  }
}
