import { Component, OnInit } from "@angular/core";
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
  selector: "app-contact-create",
  templateUrl: "./contact-create.component.html",
  styleUrls: ["./contact-create.component.css"]
})
export class ContactCreateComponent implements OnInit {
  author: String;
  firstName: String;
  lastName: String;
  city: String;
  state: String;
  createContactForm: FormGroup;

  constructor(
    private router: Router,
    private flashMessage: FlashMessagesService,
    private dataService: DataService,
    private validateService: ValidateService,
    public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private updateService: UpdateService
  ) {}

  ngOnInit() {}

  onSubmit(form) {
    this.firstName = form.firstName;
    this.lastName = form.lastName;
    this.city = form.city;
    this.state = form.state;
    this.onContactCreate();
  }

  onContactCreate() {
    const contact = {
      author: this.author,
      firstName: this.firstName,
      lastName: this.lastName,
      city: this.city,
      state: this.state
    };

    this.dataService.createContact(contact).subscribe(data => {
      if (data.success) {
        this.flashMessage.show("Contact created", {
          cssClass: "alert-success",
          timeout: 2000
        });
      } else {
        this.flashMessage.show("Contact not created", {
          cssClass: "alert-danger",
          timeout: 2000
        });
      }
    });
    this.updateService.updateContacts(true);
  }
}
