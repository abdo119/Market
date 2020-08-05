import { Injectable } from '@angular/core';
import {AngularFirestore} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private fs: AngularFirestore) {
  }

  // tslint:disable-next-line:typedef
  addNewUser(id, name, email)
  {
    return this.fs.collection('users/').doc(id).set({
      name ,
      email
    });
  }


}
