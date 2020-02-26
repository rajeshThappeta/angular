import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { AngularComponent } from './angular/angular.component';
import { NodejsComponent } from './nodejs/nodejs.component';
import { SquarePipe } from './square.pipe';
import { SearchPipe } from './search.pipe';
import{HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    AboutusComponent,
    TechnologiesComponent,
    AngularComponent,
    NodejsComponent,
    SquarePipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
