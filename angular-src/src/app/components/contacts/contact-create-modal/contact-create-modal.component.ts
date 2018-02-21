import { Component, OnInit } from "@angular/core";
import { NgbModal, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { ContactCreateComponent } from "../contact-create/contact-create.component";
@Component({
  selector: "app-contact-create-modal",
  templateUrl: "./contact-create-modal.component.html",
  styleUrls: ["./contact-create-modal.component.css"]
})
export class ContactCreateModalComponent implements OnInit {
  constructor(private modalService: NgbModal) {}

  ngOnInit() {}

  open(){
    const modalRef = this.modalService.open(ContactCreateComponent);
  }
}
