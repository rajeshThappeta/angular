import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

 
  //data
  emp:object={empno:100,name:"ravi",salary:30000};

  //to share data to components
  shareData():object
  {
    return this.emp;
  }


data:any;
//to read from a component
  readFromComponent(d)
  { 
    this.data=d;

  }

//to return data toa component

sendData()
{
  return this.data;
}
















}
