import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';
import { Input } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Form, Validators, FormGroup, FormControl, FormBuilder } from '@angular/forms'
import { ValidateService } from 'app/services/validate.service';
import { UpdateService } from '../../services/update.service';


@Component({
  selector: 'app-tour',
  templateUrl: './tourCreate.component.html',
  styleUrls: ['./tourCreate.component.css']
})

export class TourCreateComponent implements OnInit {
  tourName: String;
  bandName: String;
  createdDate: Date;
  startDate: Date;
  endDate: Date;
  author: String;
  createTourForm: FormGroup;

  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private dataService: DataService,
    private validateService: ValidateService,
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private updateService: UpdateService
  ) { }

  ngOnInit() {
    this.createdDate = new Date();

  }

  onSubmit(form) {
    // Get data from form
    this.tourName = form.tourName;
    this.bandName = form.bandName;
    // Datepicker outputs and object, reformating for JS Date
    this.startDate = new Date(form.startDate.year, form.startDate.month, form.startDate.day);
    this.endDate = new Date(form.endDate.year, form.endDate.month, form.endDate.day);
    this.onTourCreate();
  }

  onTourCreate() {
    const tour = {
      tourName: this.tourName,
      bandName: this.bandName,
      createdDate: this.createdDate,
      startDate: this.startDate,
      endDate: this.endDate,
      author: this.author
    }
    // Create Tour
    this.dataService.createTour(tour).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Tour created', { cssClass: 'alert-success', timeout: 2000 });
        this.router.navigate(['/dashboard']);
      }
      else {
        this.flashMessage.show('Tour not created', { cssClass: 'alert-danger', timeout: 2000 });
        this.router.navigate(['/dashboard']);
      }
    });
    this.updateService.updateTour(true);
  }
}
