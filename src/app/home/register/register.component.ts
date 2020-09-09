import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MustMatch } from '../matchValidator/must-match';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  testForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.testForm = this.formBuilder.group({
      title: [],
      firstName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      lastName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]*')]],
      email: ['', [Validators.required, Validators.email]],
      confirmemail: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        // Validators.pattern('((?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,30})'),
      ]],
      confirmPassword: ['', [Validators.required]],
      acceptTerms: []
    },
    {
      validator: [
        MustMatch('email', 'confirmemail'),
        MustMatch('password', 'confirmPassword')
      ]
    });
  }

  get f(): any {
    return this.testForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.testForm.valid){
      return;
    }
  }

  onReset(): void {
    this.submitted = false;
    this.testForm.reset();
  }


}
