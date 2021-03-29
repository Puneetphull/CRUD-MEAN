import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ListuserComponent } from './listuser/listuser.component';
import { LoginComponent } from './login/login.component';
import { RegistorComponent } from './registor/registor.component';
import {AuthGuard} from './shared/auth.service';
import { UpdateComponent } from './update/update.component';


const routes: Routes = [{
  path:"",
  component:HomeComponent
},{
  path:"login",
  component:LoginComponent
},
{ path:"registor",
component:RegistorComponent

},
{
  path:'profile',
  component:ListuserComponent,
  canActivate:[AuthGuard],
},{
  path:'update',
  component:UpdateComponent,
  canActivate:[AuthGuard]
},{
  path:"home",
  component:HomeComponent
}];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
