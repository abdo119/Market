import { Component, OnInit } from '@angular/core';
import {CartService} from '../../services/cart.service';
import {Shopping} from '../../interface/shopping';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Shopping[] = [];
  constructor(private cs: CartService, private router: Router, private title: Title) {
    title.setTitle('Cart User');
  }

  ngOnInit(): void {
    this.cs.getCart().subscribe(cart => {
      this.cart = cart.map(shopping => {
        return{
          id: shopping.payload.doc.id ,
          ...shopping.payload.doc.data()  as Shopping
        };
      });
    });
  }
  // tslint:disable-next-line:typedef
  delete(index){
    // tslint:disable-next-line:no-unused-expression
    this.cs.delete(this.cart[index].id);
    this.router.navigate(['/']);
  }
  // tslint:disable-next-line:typedef
  save(i)
  {
    this.cs.save(this.cart[i].id, this.cart[i].amount);
    this.router.navigate(['/']);
  }
}
