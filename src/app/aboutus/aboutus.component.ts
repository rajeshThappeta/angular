import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  empData:object={};
  //inject DataService obj
  constructor(public dsObj:DataService) { }
  
ngOnInit()
  {
   this.empData= this.dsObj.shareData();
   console.log(this.empData)
  }
}
