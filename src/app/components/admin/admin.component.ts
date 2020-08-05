import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {createViewChild} from '@angular/compiler/src/core';
import {NgForm} from '@angular/forms';
import {G} from '../../interface/g';
import {GoodsService} from '../../services/goods.service';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
@ViewChild('img') img: ElementRef ;
  constructor(private sendTo: GoodsService , private router: Router, private title: Title) {
    title.setTitle('Admin');
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  addGoods(form: NgForm)
  {
    const name = (form.value as G).name;
    const price = (form.value as G).price;
    const image = (this.img.nativeElement as HTMLInputElement).files[0];
    this.sendTo.addGoods(name, price , image);
    setTimeout(() => {
      this.router.navigate(['/']);
    }, 8000);
  }


}
