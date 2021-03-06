import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  MatButtonModule,
  MatInputModule,
  MatFormFieldModule, 
  MatCardModule, 
  MatDialogModule,  
 } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule, 
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,     
  ],
  bootstrap: [AppComponent],
  exports: [
    MatButtonModule,
    MatInputModule, 
    MatFormFieldModule,
    MatCardModule,
    MatDialogModule,
  ]
})
export class AppModule { }
