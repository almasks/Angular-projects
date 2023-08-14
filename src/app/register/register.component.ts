import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(private regRouter:Router){

  }
  register(username:any,password:any){
    alert(`username:${username.value},password: ${password.value}`)
    //to navigate to login
    this.regRouter.navigateByUrl('')
  }

}
