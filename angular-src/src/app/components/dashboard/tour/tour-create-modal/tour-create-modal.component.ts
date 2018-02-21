import { Component, OnInit, Input, Output } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { TourCreateComponent } from '../tourCreate/tourCreate.component'

@Component({
  selector: 'app-tour-create-modal',
  templateUrl: './tour-create-modal.component.html',
  styleUrls: ['./tour-create-modal.component.css']
})
export class TourCreateModalComponent implements OnInit {
  constructor(private modalService: NgbModal) { }
  ngOnInit() {
  }

  open() {
    const modalRef = this.modalService.open(TourCreateComponent);
  }

}
