import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';
import {AngularFireAuth} from '@angular/fire/auth';
import {G} from '../interface/g';
import {AuthService} from './auth.service';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private cs: AngularFirestore, private ca: AuthService ) { }
  // tslint:disable-next-line:typedef
  addToCart(data: G){
    return  this.cs.collection(`users/ ${this.ca.userId}/cart/`).add(data);
  }
  // tslint:disable-next-line:typedef
  getCart(){
    console.log(this.ca.userId);
    return this.cs.collection(`users/ ${this.ca.userId}/cart/`).snapshotChanges();
  }
  // tslint:disable-next-line:typedef
  delete(i){
    return this.cs.doc(`users/ ${this.ca.userId}/cart/${i}`).delete();
  }
  // tslint:disable-next-line:typedef
  save(id , amount){
    return  this.cs.doc(`users/ ${this.ca.userId}/cart/${id}`).update({
      amount
    });
  }
}
