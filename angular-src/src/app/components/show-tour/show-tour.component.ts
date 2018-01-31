import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Router } from "@angular/router";
import { UpdateService } from "../../services/update.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-show-tour",
  templateUrl: "./show-tour.component.html",
  styleUrls: ["./show-tour.component.css"]
})
export class ShowTourComponent implements OnInit {
  tours: Object[];
  tourDates: Object[];
  selectedTour: Object;
  updateSub: Subscription;

  constructor(
    private router: Router,
    private dataService: DataService,
    private updateService: UpdateService
  ) {}

  // Initialize
  ngOnInit() {
    this.updateSub = this.updateService.update.subscribe(update =>
      this.update()
    );
    this.dataService.getAllTours().subscribe(
      tour => {
        this.tours = tour.tours;
        this.selectedTour = this.tours[0];
        this.dataService.sendTour(this.selectedTour);
        this.dataService
          .getAllTourDates(this.selectedTour)
          .subscribe(tourDates => {
            this.tourDates = tourDates.tourDates;
          });
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }
  updateSelectedTour(tour) {
    this.selectedTour = tour;
    this.update();
  }
  
  update() {
    this.dataService.getAllTours().subscribe(
      tour => {
        this.tours = tour.tours;
        this.dataService.sendTour(this.selectedTour);
        this.dataService
          .getAllTourDates(this.selectedTour)
          .subscribe(tourDates => {
            this.tourDates = tourDates.tourDates;
          });
        this.dataService.sendTour(this.selectedTour);
      },
      err => {
        console.log(err);
        return false;
      }
    );
  }
}
