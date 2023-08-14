import { Component } from '@angular/core';
import { last } from 'rxjs';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
fName:string=""
lName:string=""
desg:string=""
age:string=""
username:string=""
constructor(private dashboardService:DataService){
this.username=dashboardService.loginUsername
}

update(){
 alert(`firstName :${this.fName}
 lastname:${this.lName}
 designation:${this.desg}
 age:${this.age}`)
}
}
