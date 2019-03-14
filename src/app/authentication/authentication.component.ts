import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service'; 

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  public myForm: FormGroup;
  title = 'R&D Angular ';
  error: string = "";

  constructor() { }

  ngOnInit() {
    this.myForm = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      password: new FormControl('', [Validators.required]),
    });
  }
  
  public hasError = (ControlName: string, errorlName: string) => {
    return this.myForm.controls[ControlName].hasError(errorlName);
  }

  onSubmitForm() {
    event.preventDefault();      
  }

}
