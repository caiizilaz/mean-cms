import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../class/config';

@Injectable()
export class PostService {

  constructor(private http: Http,
    private config: Config) { }

  addPost(post) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.config.api}posts/create`, post, { headers: headers })
      .map(res => res.json());
  }
  getPost() {
    return this.http.get(`${this.config.api}posts/read`)
      .map(res => res.json());
  }
  searchPost(post) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.config.api}posts/search`, post, { headers: headers })
      .map(res => res.json());
  }
  updatePost(post) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.config.api}posts/update`, post, { headers: headers })
      .map(res => res.json());
  }
}
