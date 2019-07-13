import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerationForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.registerationForm = new FormGroup({
      email : new FormControl(null, Validators.required),
      password : new FormControl(null, Validators.required)
    });
  }

}
