import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  id: string;
  private sub: any;
  constructor(private route: ActivatedRoute,
    private router: Router) { }
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  // onDeletePost(id) {
  //   this.postService.deletePost(id).subscribe(data => {
  //     this.chkFlash(data);
  //   });
  // }
  // toggleSuccess(i) {
  //   const item = {
  //     _id: i._id,
  //     success: !i.success
  //   }
  //   this.postService.updatePost(item).subscribe(data => {
  //     this.itemList = data.todo;
  //   });
  // }

}