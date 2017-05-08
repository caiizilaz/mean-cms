import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  name: String;
  username: String;
  email: String;
  password: String;
  constructor(public toastr: ToastsManager,
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router) { }
  ngOnInit() {
  }
  onRegisterSubmit() {
    const user = {
      name: this.name,
      email: this.email,
      username: this.username,
      password: this.password
    }
    if (!this.validateService.validateRegister(user)) {
      this.toastr.warning('Please fill in all fields', 'Alert!');
      return false;
    }
    if (!this.validateService.validateEmail(user.email)) {
      this.toastr.warning('Please use a valid email', 'Alert!');
      return false;
    }
    this.authService.registerUser(user).subscribe(data => {
      if (data.success) {
        this.toastr.success('You now registerd and can log in', 'Success!');
        this.router.navigate(['/login']);
      } else {
        this.toastr.error('Something went wrong', 'Oops!');
        this.router.navigate(['/register']);
      }
    });
  }
}