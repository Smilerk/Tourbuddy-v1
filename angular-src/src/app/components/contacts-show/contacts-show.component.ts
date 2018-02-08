import { Component, OnInit } from "@angular/core";
import { DataService } from "../../services/data.service";
import { Router } from "@angular/router";
import { UpdateService } from "../../services/update.service";
import { Subscription } from "rxjs/Subscription";

@Component({
  selector: "app-contacts-show",
  templateUrl: "./contacts-show.component.html",
  styleUrls: ["./contacts-show.component.css"]
})
export class ContactsShowComponent implements OnInit {
  updateSub: Subscription;
  contacts: Object[];

  constructor(
    private router: Router,
    private dataService: DataService,
    private updateService: UpdateService
  ) {}

  ngOnInit() {
    this.updateSub = this.updateService.contactUpdate.subscribe(update =>
      this.update()
    );
    this.dataService.getAllContacts().subscribe(contacts => {
      this.contacts = contacts.contacts;
    });
  }

  update() {
    this.dataService.getAllContacts().subscribe(contacts => {
      this.contacts = contacts.contacts;
    });
  }
}
