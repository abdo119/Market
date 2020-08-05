import { Injectable } from '@angular/core';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestore, AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireStorage} from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class GoodsService {

  constructor( private gs: AngularFirestore, private stg: AngularFireStorage) { }
  // tslint:disable-next-line:typedef
  getGoods(){
   return  this.gs.collection('goods').valueChanges();
  }
  // tslint:disable-next-line:typedef
  addGoods(name: string, price: number, img: File)
  {
    // tslint:disable-next-line:prefer-const
    let ref = this.stg.ref('goods/' + img.name);
    ref.put(img).then(() => {
     ref.getDownloadURL().subscribe(imgUrl => {this.gs.collection('goods').add({
       name ,
       price ,
       imgUrl
     });});
    });
  }
}
