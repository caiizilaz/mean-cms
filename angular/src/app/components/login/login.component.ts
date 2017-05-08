import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  username: String;
  password: String;
  constructor(public toastr: ToastsManager,
    private authService: AuthService,
    private router: Router) { }
  ngOnInit() {
  }
  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }
    if (this.username && this.password) {
      this.authService.authenticateUser(user).subscribe(data => {
        if (data.success) {
          this.authService.storeUserData(data.token, data.user);
          this.toastr.success('You are now logged in', 'Success!');
          this.router.navigate(['dashboard']);
        } else {
          this.toastr.error(data.msg, 'Oops!');
          this.router.navigate(['login']);
        }
      });
    } else {
      this.toastr.error('Please fill Username and Password', 'Oops!');
    }
  }
}