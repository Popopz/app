import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as TeleCord from '../../assets/TeleCord.json';
import { CRUDService } from '../services/crud.service';
import { user } from '../models/userModel'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private CRUDService: CRUDService){}
  users = new user;
  ngOnInit(){}
  loginUser(thing:any){
    this.CRUDService.readAllUsers().subscribe(
    data => this.users = data,
    error => console.log(error)
    );
  }

  /*
  loginUser(thing:any){
    console.warn(thing);
    var okay = false;
    for (let i = 0; i < TeleCord.user.length; i++){
      if (thing.username == TeleCord.user[i].username && thing.email == TeleCord.user[i].email){
        okay=true;
      }
    }
    if(okay){
      sessionStorage.setItem('valid', 'true')
      localStorage.setItem("username",thing.username)
      this.router.navigateByUrl('/group');
    }
    else{
      alert("Error: Incorrect Username/Password");
    }
  }
  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log('Reading local json files');
    console.log(TeleCord);
  }
  */
}