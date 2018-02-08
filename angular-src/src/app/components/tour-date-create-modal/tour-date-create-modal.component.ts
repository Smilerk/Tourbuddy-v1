import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { TourDateCreateComponent } from "../tour-date-create/tour-date-create.component";
@Component({
  selector: "app-tour-date-create-modal",
  templateUrl: "./tour-date-create-modal.component.html",
  styleUrls: ["./tour-date-create-modal.component.css"]
})
export class TourDateCreateModalComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  open() {
    const modalRef = this.modalService.open(TourDateCreateComponent);
  }
}
