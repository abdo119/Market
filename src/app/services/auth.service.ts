import { Injectable } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userState: Observable<firebase.User>;
  userId: string ;
  constructor(private Auth: AngularFireAuth) {
    // tslint:disable-next-line:no-unused-expression
    this.userState = Auth.user;
  }
  // tslint:disable-next-line:typedef
  signUp(email, password)
  {
   return  this.Auth.createUserWithEmailAndPassword(email, password);
  }
  // tslint:disable-next-line:typedef
  login(email, password)
  {
    return this.Auth.signInWithEmailAndPassword(email, password);
  }
  // tslint:disable-next-line:typedef
  logOut(){
    return   this.Auth.signOut();
  }

}
