import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CatService } from '../../services/cat.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  catList: Array<object> = [];
  @Input() visibleNav;
  constructor(public toastr: ToastsManager,
    private authService: AuthService,
    private router: Router,
    private catService: CatService) { }
  ngOnInit() {
    this.catService.getCat().subscribe(data => {
      this.catList = data;
    })
  }
  onLogoutClick() {
    this.authService.logout();
    this.toastr.success('You are logged out', 'Success!');
    this.router.navigate(['/login']);
    return false;
  }
}