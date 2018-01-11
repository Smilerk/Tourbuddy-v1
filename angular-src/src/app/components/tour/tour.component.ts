import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-tour',
  templateUrl: './tour.component.html',
  styleUrls: ['./tour.component.css']
})
export class TourComponent implements OnInit {
  tourName: String;
  bandName: String;
  createdDate: Date;
  startDate: Date;
  endDate: Date;
  author: String;


  constructor(
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private dataService: DataService) { }

  ngOnInit() {
    this.author = this.authService.getUser().id;
    this.createdDate = new Date();
  }

  onTourCreate() {
    const Tour = {
      tourName: this.tourName,
      bandName: this.bandName,
      createdDate: this.createdDate,
      startDate: this.startDate,
      endDate: this.endDate,
      author: this.author
    }
    // Create Tour
    this.dataService.createTour(Tour).subscribe(data => {
      if (data.success) {
        this.flashMessage.show('Tour created', { cssClass: 'alert-success', timeout: 2000 })
        this.router.navigate(['/dashboard']);
      }
      else {
        this.flashMessage.show('Tour not created', { cssClass: 'alert-danger', timeout: 2000 })
        this.router.navigate(['/dashboard']);
      }
    })
  }

}
