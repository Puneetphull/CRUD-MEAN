import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistorComponent } from './register/registor.component';
import { LoginComponent } from './login/login.component';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";
import { ListuserComponent } from './listuser/listuser.component';
import { UpdateComponent } from './update/update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {  FileUploadModule } from 'ng2-file-upload';
import {FileSelectDirective} from 'ng2-file-upload';
import {CommonModule} from '@angular/common';
import { HomeComponent } from './home/home.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';








@NgModule({
  declarations: [
    AppComponent,
    RegistorComponent,
    LoginComponent,
    ListuserComponent,
    UpdateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
   FileUploadModule,
   MatCardModule,
   //FileSelectDirective
   MatButtonModule





  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
