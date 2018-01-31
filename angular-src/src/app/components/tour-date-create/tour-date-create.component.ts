import { Component, OnInit } from "@angular/core";
import { AuthService } from "../../services/auth.service";
import { FlashMessagesService } from "angular2-flash-messages";
import { Router } from "@angular/router";
import { DataService } from "../../services/data.service";
import { Input } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import {
  Form,
  Validators,
  FormGroup,
  FormControl,
  FormBuilder
} from "@angular/forms";
import { ValidateService } from "../../services/validate.service";
import { UpdateService } from "../../services/update.service";

@Component({
  selector: "app-tour-date-create",
  templateUrl: "./tour-date-create.component.html",
  styleUrls: ["./tour-date-create.component.css"]
})
export class TourDateCreateComponent implements OnInit {
  tour: Object;
  date: Date;
  status: String;
  streetAddress: String;
  city: String;
  state: String;
  zipCode: Number;
  venueName: String;
  contact: String;
  startTime: String;
  endTime: String;
  bands: String[];
  contacts: String[];
  createTourDateForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private dataService: DataService,
    private validateService: ValidateService,
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private updateService: UpdateService
  ) {}

  ngOnInit() {
    this.dataService.tour$.subscribe(tour => (this.tour = tour));
  }

  onSubmit(form) {
    this.date = new Date(form.date.year, form.date.month - 1, form.date.day);
    this.status = form.status;
    this.streetAddress = form.streetAddress;
    this.city = form.city;
    this.state = form.state;
    this.zipCode = form.zipCode;
    this.venueName = form.venueName;
    this.contact = form.contact;
    this.startTime = form.startTime;
    this.endTime = form.endTime;
    this.bands = form.bands;
    this.onTourDateCreate();
  }

  onTourDateCreate() {
    const tourDate = {
      tour: this.tour,
      date: this.date,
      status: this.status,
      streetAddress: this.streetAddress,
      city: this.city,
      state: this.state,
      zipCode: this.zipCode,
      venueName: this.venueName,
      contact: this.contact,
      startTime: this.startTime,
      endTime: this.endTime,
      bands: this.bands
    };
    console.log(tourDate);
    this.dataService.createTourDate(tourDate).subscribe(data => {
      if (data.success) {
        this.flashMessage.show("Tour Date Created", {
          cssClass: "alert-success",
          timeout: 2000
        });
        this.router.navigate(["/dashboard"]);
      } else {
        this.flashMessage.show("Tour Date Not Created", {
          cssClass: "alert-danger",
          timeout: 2000
        });
        this.router.navigate(["/dashboard"]);
      }
    });
    this.updateService.updateTour(true);
  }
}
