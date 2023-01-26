import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './Components/error/error.component';
import { HomeComponent } from './Components/home/home.component';
import { UserFormComponent } from './Components/user-form/user-form.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/new', component: UserFormComponent },
  { path: 'users/:id', component: UserFormComponent },
  { path: '**', component: ErrorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
