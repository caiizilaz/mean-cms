import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  postList: any;
  headerMsg: string;

  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        if (params.cat && params.cat !== 'all') {
          let post = {
            cat: [params.cat]
          }
          this.postService.searchPost(post).subscribe(data => {
            this.postList = data.post;
            this.setHeaderMsg('search', params.name);
          });
        } else {
          this.postService.getPost().subscribe(data => {
            this.postList = data;
            this.setHeaderMsg('all');
          });
        }
      });
  }
  setHeaderMsg(type, name='') {
      this.headerMsg = (this.postList) ?
       (type === 'all') ? 
       `บทความทั้งหมด (${this.postList.length})` : 
       `บทความใน ${name} (${this.postList.length})` :
       'ยังไม่มีบทความในขณะนี้';
  }
}
