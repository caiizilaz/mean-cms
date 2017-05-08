import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service'

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.scss']
})
export class PostCardComponent implements OnInit {
  @Input() postList;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
