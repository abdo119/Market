import { Component, OnInit } from '@angular/core';
import {auth} from 'firebase';
import {AuthService} from '../../services/auth.service';
import {User} from '../../interface/user';
import {UserService} from '../../services/user.service';
import {Router} from '@angular/router';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-sign',
  templateUrl: './sign.component.html',
  styleUrls: ['./sign.component.css']
})
export class SignComponent implements OnInit {

  constructor(private sign: AuthService, private ad: UserService, private router: Router , private title: Title) {
    title.setTitle('Sign Up');
  }
  errorMess: string;
  ngOnInit(): void {
  }
  // tslint:disable-next-line:typedef
  signUp(form){
    let data: User = form.value;
    this.sign.signUp(data.email, data.password)
      .then(res => {
        this.errorMess = '';
        this.ad.addNewUser(res.user.uid, data.name, data.email).then(() => {
          this.router.navigate(['/']);
          alert('Successfully SignUp');
        });
      })
      .catch(err => this.errorMess = err.message);

  }

}
