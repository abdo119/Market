import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private log: AuthService, private router: Router) { }
  isUser = false;
  ngOnInit(): void {
    this.log.userState.subscribe(user => {
      if (user) {
        this.isUser = true;
        this.log.userId = user.uid;
      }
      else {
        this.log.userId = '';
        this.isUser = false;
      }
    });
  }
  // tslint:disable-next-line:typedef
  logOut(){
    this.log.logOut().then(() => {
      console.log('done');
    });
  }
  // tslint:disable-next-line:typedef
  logo() {
    this.isUser = false;
    this.router.navigate(['/']);
    alert('Successfully Logout');
  }


}
