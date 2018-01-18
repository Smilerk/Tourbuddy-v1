import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { DataService } from '../../services/data.service';
import { Router } from '@angular/router';
import { UpdateService } from '../../services/update.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-show-tour',
  templateUrl: './show-tour.component.html',
  styleUrls: ['./show-tour.component.css']
})
export class ShowTourComponent implements OnInit {
  tours: Object[];
  updateSub: Subscription;

  constructor(
    private router: Router,
    private dataService: DataService,
    private updateService: UpdateService) { }

  // Initialize
  ngOnInit() {
    this.updateSub = this.updateService.update.subscribe(update => this.update());
    this.dataService.getAllTours().subscribe(tour => {
      this.tours = tour.tours;
      console.log(this.tours);
    },
      err => {
        console.log(err);
        return false;
      });
  };

  update() {
    this.dataService.getAllTours().subscribe(tour => {
      this.tours = tour.tours;
      console.log(this.tours);
    },
      err => {
        console.log(err);
        return false;
      });
  };
}


