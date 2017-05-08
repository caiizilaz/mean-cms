import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { Config } from '../class/config';

@Injectable()
export class CatService {
  constructor(
    private http: Http,
    private config: Config) { }
  addCat(cat) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post(`${this.config.api}cats/create`, cat, { headers: headers })
      .map(res => res.json());
  }
  getCat() {
    return this.http.get(`${this.config.api}cats/read`)
      .map(res => res.json());
  }
  deleteCat(id) {
    return this.http.delete(`${this.config.api}cats/delete/${id}`)
      .map(res => res.json());
  }
  updateCat(cat) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.put(`${this.config.api}cats/update`, cat, { headers: headers })
      .map(res => res.json());
  }
}
