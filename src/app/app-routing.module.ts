import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {SignComponent} from './components/sign/sign.component';
import {LoginComponent} from './components/login/login.component';
import {NavbarComponent} from './components/navbar/navbar.component';
import {NotFoundComponent} from './components/not-found/not-found.component';
import {AdminComponent} from './components/admin/admin.component';
import {GurddGurd} from './services/gurd/gurdd.service';
import {CartComponent} from './components/cart/cart.component';

const routes: Routes = [
  {path: '', component: HomeComponent , data: {index: 0}},
  {path: 'sign', component: SignComponent, data: {index: 2}},
  {path: 'login', component: LoginComponent, data: {index: 3}},
  {path: 'cart', component: CartComponent , canActivate: [GurddGurd], data: {index: 4} },
  {path: 'navbar', component: NavbarComponent },
  {path: 'admin', component: AdminComponent ,  canActivate: [GurddGurd], data: {index: 1}},
  {path: '**', component: NotFoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
