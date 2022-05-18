import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginPageComponent} from "./Component/login-page/login-page.component";
import {SignUpPageComponent} from "./Component/sign-up-page/sign-up-page.component";
import {UserPageComponent} from "./Component/user-page/user-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginPageComponent},
  {path: 'signUp', component: SignUpPageComponent},
  {path: 'user', component: UserPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
