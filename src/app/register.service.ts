import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  //inject HttpClient object
  constructor(private hc:HttpClient) { }


  doRegister(userObj):Observable<object>
  {
    //make http post req and return the Observable
    return this.hc.post<object>('/user/register',userObj);
  }
}
