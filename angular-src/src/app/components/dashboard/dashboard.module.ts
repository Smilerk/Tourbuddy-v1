import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ContactsModule } from "../contacts/contatcs.module";

import { DashboardComponent } from "./dashboard.component";
import { TourModule } from "./tour/tour.module";
import { AuthGuard } from "../../guards/auth.guard";

const appRoutes: Routes = [
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  }
];
@NgModule({
  declarations: [DashboardComponent],
  imports: [
    TourModule,
    FormsModule,
    ContactsModule,
    RouterModule.forChild(appRoutes)
  ]
})
export class DashboardModule {}
