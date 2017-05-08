import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {
  post: object;
  constructor(private postService: PostService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route
      .queryParams
      .subscribe(params => {
        let post = {
          _id: [params._id]
        }
        this.postService.searchPost(post).subscribe(data => {
          this.post = data.post[0];
        });
      })
  }

}
