import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registrationForm: FormGroup;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.registrationForm = new FormGroup({
      email : new FormControl(null, Validators.required),
      password : new FormControl(null, Validators.required)
    });
  }

  onSubmit() {
    console.log(this.registrationForm.value);
    this.authService.registerUser(this.registrationForm.value)
                    .subscribe((response) => {
                      console.log(response);
                    },
                    (error) => {
                      console.log(error);
                    });
  }
}
