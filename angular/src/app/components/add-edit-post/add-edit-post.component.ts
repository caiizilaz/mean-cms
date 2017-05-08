import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Post } from '../../model/post';

@Component({
  selector: 'app-add-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.scss']
})
export class AddEditPostComponent implements OnInit {
  @Input() id;
  mode: string;
  post: Post;
  constructor(public toastr: ToastsManager,
    private postService: PostService) {
    this.post = new Post();
  }
  ngOnInit() {
    if (this.id) {
      this.mode = 'Edit';
      let post = {
        _id: this.id
      }
      this.postService.searchPost(post).subscribe(data => {
        this.post = data.post[0];
      });
    } else {
      this.mode = 'Add';
    }
  }
  onAddPostSubmit() {
    if (this.mode === 'Add') {
      this.postService.addPost(this.post).subscribe(data => {
        this.chkToast(data);
      });
    } else if (this.mode === 'Edit') {
      this.post._id = this.id;
      this.postService.updatePost(this.post).subscribe(data => {
        this.chkToast(data);
      });
    }
  }
  onCallback(catList) {
    this.post.cat = catList.map((c) => c['_id']);
  }
  chkToast(data) {
    if (data.success) {
      this.toastr.success(data.msg, 'Success!');
    } else {
      this.toastr.error(data.msg, 'Oops!');
    }
  }
}
