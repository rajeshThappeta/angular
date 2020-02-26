import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnChanges,OnDestroy {

constructor()
{
  console.log("root-constructor");
}

ngOnInit()
{
  console.log("root-oninit")
}
ngOnChanges()
{
  console.log("root-onchanges")
}
ngOnDestroy()
{
  console.log("root-ondestroy")
}
 
}


