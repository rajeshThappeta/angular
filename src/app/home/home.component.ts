import { Component, OnInit, OnDestroy, OnChanges, Input } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  searchTerm:string;

  //emp data
  emps:object[]=[{eno:100,name:"ravi",salary:20000},
  {eno:200,name:"sravani",salary:30000},
  {eno:300,name:"kiran",salary:20000},
  {eno:400,name:"madhu",salary:20000},
  {eno:500,name:"sasi",salary:2000000},
  {eno:600,name:"aurobind",salary:2000000},
  {eno:700,name:"suresh",salary:20000},
  {eno:800,name:"ramana",salary:20000},
  {eno:900,name:"geetha",salary:20000},
  {eno:1000,name:"seetha",salary:20000},

{eno:1100,name:"zombie",salary:20000},
{eno:1200,name:"yamini",salary:20000},
{eno:1300,name:"pubjee",salary:20000},
{eno:1400,name:"suman",salary:20000}];



   
}
