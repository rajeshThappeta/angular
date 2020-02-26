import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { TechnologiesComponent } from './technologies/technologies.component';
import { AngularComponent } from './angular/angular.component';
import { NodejsComponent } from './nodejs/nodejs.component';


const routes: Routes = [
  {path:"",redirectTo:'login',pathMatch:'full'},
{path:'home',component:HomeComponent},
{path:'login',component:LoginComponent},
{path:'register',component:RegisterComponent},
{path:"aboutus",component:AboutusComponent},
{path:"tech",component:TechnologiesComponent,children:[
                      {path:"angular",component:AngularComponent},
                      {path:"nodejs",component:NodejsComponent}
]}];




@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
