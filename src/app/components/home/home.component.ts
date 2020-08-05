import {Component, OnInit} from '@angular/core';
import {G} from '../../interface/g';
import {GoodsService} from '../../services/goods.service';
import {CartService} from '../../services/cart.service';
import {AuthService} from '../../services/auth.service';
import {MatDialog} from '@angular/material/dialog';
import {DialogElementsExampleDialogComponent} from '../dialog-elements-example-dialog/dialog-elements-example-dialog.component';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  goods: G[] = [];
  add = -1;
  isUser = false;

  // tslint:disable-next-line:max-line-length
  constructor(public dialog: MatDialog, private log: AuthService, private gs: GoodsService, private sendCart: CartService, private title: Title) {
    title.setTitle('Home');
  }

  ngOnInit(): void {
    this.gs.getGoods().subscribe(data => {
      this.goods = data;
    });
    this.log.userState.subscribe(user => {
      if (user) {
        this.isUser = true;
      } else {
        this.isUser = false;
      }
    });
  }

  // tslint:disable-next-line:typedef
  addToCart(index: number) {
    if (this.isUser) {
      this.add = +index;
    } else {
      this.dialog.open(DialogElementsExampleDialogComponent);
    }
  }

  // tslint:disable-next-line:typedef
  buy(amount: number) {
    let select: G;
    select = this.goods[this.add];
    const data = {
      name: select.name,
      amount: +amount,
      price: select.price
    };
    this.sendCart.addToCart(data).then(() => {
      this.add = -1;
    });
  }

}
