import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {User} from '../../interface/user';
import {Router} from '@angular/router';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 eM;
  constructor(private li: AuthService, private router: Router , private title: Title) {
    title.setTitle('Login');
  }

  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  login(form){
    const data: User = form.value ;
    this.li.login(data.email , data.password).then(() => {
      this.router.navigate(['/']);
      alert('Successfully Login');
    }).catch(err => {
      this.eM = err.message;
      console.log(this.eM.message);

    });
  }

}
