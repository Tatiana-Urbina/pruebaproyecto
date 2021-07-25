import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators,} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
formulariologin= new FormGroup({
  email:new FormControl ('', [Validators.required,Validators.email],[]),
  password: new FormControl ('',[Validators.required, Validators.minLength(8)])
})


  constructor() { }

  ngOnInit(): void {
    // ...
  }

  get email(){
    return this.formulariologin.get('email')
  }


  }