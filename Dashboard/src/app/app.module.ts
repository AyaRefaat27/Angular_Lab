import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { UserDetailsComponent } from './Components/user-details/user-details.component';
import { UserFormComponent } from './Components/user-form/user-form.component';
import { UsersComponent } from './Components/users/users.component';
import { HomeComponent } from './Components/home/home.component';
import { ErrorComponent } from './Components/error/error.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { HttpClientModule } from '@angular/common/http';
import { CardsComponent } from './Components/cards/cards.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    UserDetailsComponent,
    UserFormComponent,
    UsersComponent,
    HomeComponent,
    ErrorComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
