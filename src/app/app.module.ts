import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HomeComponent} from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignComponent } from './components/sign/sign.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogElementsExampleDialogComponent } from './components/dialog-elements-example-dialog/dialog-elements-example-dialog.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AdminComponent } from './components/admin/admin.component';
import {AngularFireStorageModule} from '@angular/fire/storage';
import { CartComponent } from './components/cart/cart.component';

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignComponent,
    NavbarComponent,
    NotFoundComponent,
    DialogElementsExampleDialogComponent,
    AdminComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyCQyjqIpPqHo4YBKSuGHorlavSaKzDJeUY',
      authDomain: 'market-a0ab8.firebaseapp.com',
      databaseURL: 'https://market-a0ab8.firebaseio.com',
      projectId: 'market-a0ab8',
      storageBucket: 'market-a0ab8.appspot.com',
      messagingSenderId: '8735590297',
      appId: '1:8735590297:web:e7ff2933cf94487bfc7508',
      measurementId: 'G-CDCY590215'
    }),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatDialogModule,
    AngularFireStorageModule
  ],
providers: [],
  bootstrap : [AppComponent]
})
export class AppModule { }
