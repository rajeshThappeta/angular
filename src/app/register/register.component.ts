import { Component, OnInit } from '@angular/core';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  //inject RegisterService obj
  constructor(private rs:RegisterService) { }

  

  submitForm(userObj)
  {
    console.log(userObj);
    //make a call to doRegister() and subscribe the observable returned by it
    this.rs.doRegister(userObj).subscribe((data)=>{
      console.log(data);
      alert(data["message"]);
    });
  }


}
