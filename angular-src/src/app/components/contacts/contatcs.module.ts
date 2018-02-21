import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { OrderModule } from "ngx-order-pipe";

import { ContactCreateComponent } from "./contact-create/contact-create.component";
import { ContactsShowComponent } from "./contacts-show/contacts-show.component";
import { ContactCreateModalComponent } from "./contact-create-modal/contact-create-modal.component";

@NgModule({
  declarations: [
    ContactCreateComponent,
    ContactsShowComponent,
    ContactCreateModalComponent
  ],
  imports: [CommonModule, FormsModule, NgbModule.forRoot(), OrderModule],
  exports: [
    ContactsShowComponent,
    ContactCreateComponent,
    ContactCreateModalComponent
  ],
  entryComponents: [ContactCreateComponent, ContactCreateModalComponent]
})
export class ContactsModule {}
