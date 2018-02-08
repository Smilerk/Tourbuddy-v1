import { Injectable } from "@angular/core";
import { Http, Headers, URLSearchParams } from "@angular/http";
import { HttpModule } from "@angular/http";
import { AuthService } from "../services/auth.service";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import "rxjs/add/operator/map";

@Injectable()
export class DataService {
  constructor(private http: Http, private authService: AuthService) {}

  private tour = new BehaviorSubject<Object>("initial");
  tour$ = this.tour.asObservable();

  createTour(tour) {
    let headers = new Headers();
    headers.append("Authorization", this.authService.getToken());
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/tours/new", tour, {
        headers: headers
      })
      .map(res => res.json());
  }

  getAllTours() {
    let headers = new Headers();
    headers.append("Authorization", this.authService.getToken());
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/tours/all", {
        headers: headers
      })
      .map(res => res.json());
  }

  createTourDate(tourDate) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/tourDates/new", tourDate, {
        headers: headers
      })
      .map(res => res.json());
  }

  getAllTourDates(tour) {
    let headers = new Headers();
    let params = new URLSearchParams();
    params.set("id", tour._id);
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/tourDates", {
        headers: headers,
        search: params
      })
      .map(res => res.json());
  }

  createContact(contact) {
    let headers = new Headers();
    headers.append("Authorization", this.authService.getToken());
    headers.append("Content-Type", "application/json");
    return this.http
      .post("http://localhost:3000/contacts/new", contact, {
        headers: headers
      })
      .map(res => res.json());
  }

  getAllContacts() {
    let headers = new Headers();
    headers.append("Authorization", this.authService.getToken());
    headers.append("Content-Type", "application/json");
    return this.http
      .get("http://localhost:3000/contacts/all", {
        headers: headers
      })
      .map(res => res.json());
  }

  sendTour(tour: Object) {
    this.tour.next(tour);
  }


}
