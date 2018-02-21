import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { OrderModule } from "ngx-order-pipe";
import { CommonModule } from "@angular/common";

import { TourCreateComponent } from "./tourCreate/tourCreate.component";
import { ShowTourComponent } from "./show-tour/show-tour.component";
import { TourCreateModalComponent } from "./tour-create-modal/tour-create-modal.component";
import { TourDateCreateComponent } from "./tourDate/tour-date-create/tour-date-create.component";
import { TourDateCreateModalComponent } from "./tourDate/tour-date-create-modal/tour-date-create-modal.component";

@NgModule({
  declarations: [
    TourCreateComponent,
    ShowTourComponent,
    TourCreateModalComponent,
    TourDateCreateComponent,
    TourDateCreateModalComponent
  ],
  imports: [CommonModule, FormsModule, NgbModule.forRoot(), OrderModule],
  exports: [ShowTourComponent],
  entryComponents: [
    TourDateCreateModalComponent,
    TourDateCreateComponent,
    TourCreateComponent,
    TourCreateModalComponent
  ]
})
export class TourModule {}
