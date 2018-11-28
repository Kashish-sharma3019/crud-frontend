import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'ng6-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FormsModule } from '@angular/forms';
import { ShowHidePasswordModule } from 'ngx-show-hide-password';


import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AngularEntypoModule, AngularEntypoComponent } from 'angular-entypo';





@NgModule({
  declarations: [
    AppComponent,
    
    


  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule.forRoot(),
    UserModule,
    HttpClientModule,
    FormsModule,
   
    AngularEntypoModule,
    AngularFontAwesomeModule,
    ShowHidePasswordModule.forRoot(),
    RouterModule.forRoot([
      {
        path: 'login', component: LoginComponent, pathMatch: 'full'
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },

      
      
      { path: '*', component: LoginComponent }

    ])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
