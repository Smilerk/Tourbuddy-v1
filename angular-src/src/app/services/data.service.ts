import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { HttpModule } from '@angular/http';
import {AuthService} from '../services/auth.service'
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {

  constructor(private http: Http, private authService: AuthService) { }

  createTour(tour) {
    let headers = new Headers();
    headers.append('Authorization',this.authService.getToken());
    headers.append('Content-Type', 'application/json');
    return this.http.post('http://localhost:3000/tours/new', tour, { headers: headers }).map(res => res.json());
  }

}
