import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class UsersService {

  baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private http: Http) { }

  getAllUsers () {
    const query = 'users';
    const  url = this.baseUrl + query;
    return this.http.get(url).map(res => res.json());
  }

}
