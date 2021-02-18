import { CardModule } from './component/card/card.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import {appRoutingModule } from './app.routing';
import { HomeComponent } from './component/home/home.component';
import { ToastrModule } from 'ngx-toastr';
import { StoreModule } from '@ngrx/store';
import { reducer } from '../app/reducers/card.reducer';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './component/navbar/navbar.component';


import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent

  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      carddetails: reducer
    }),
     appRoutingModule,
    RouterModule,
     ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CardModule,
     HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
