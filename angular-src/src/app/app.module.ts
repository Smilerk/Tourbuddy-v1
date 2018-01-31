import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { HomeComponent } from "./components/home/home.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { ProfileComponent } from "./components/profile/profile.component";

import { ValidateService } from "./services/validate.service";
import { AuthService } from "./services/auth.service";
import { FlashMessagesModule } from "angular2-flash-messages";
import { AuthGuard } from "./guards/auth.guard";
import { TourCreateComponent } from "./components/tourCreate/tourCreate.component";
import { DataService } from "./services/data.service";
import { ShowTourComponent } from "./components/show-tour/show-tour.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { ReactiveFormsModule } from "@angular/forms";
import { TourCreateModalComponent } from "./components/tour-create-modal/tour-create-modal.component";
import { UpdateService } from "./services/update.service";
import { TourDateCreateComponent } from "./components/tour-date-create/tour-date-create.component";
import { TourDateCreateModalComponent } from "./components/tour-date-create-modal/tour-date-create-modal.component";
import { OrderModule } from "ngx-order-pipe";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "register", component: RegisterComponent },
  { path: "login", component: LoginComponent },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard]
  },
  { path: "profile", component: ProfileComponent, canActivate: [AuthGuard] },
  { path: "tours", component: TourCreateComponent, canActivate: [AuthGuard] },
  {
    path: "tourDates",
    component: TourDateCreateComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent,
    TourCreateComponent,
    ShowTourComponent,
    TourCreateModalComponent,
    TourDateCreateComponent,
    TourDateCreateModalComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(appRoutes),
    FlashMessagesModule.forRoot(),
    NgbModule.forRoot(),
    ReactiveFormsModule,
    OrderModule
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthGuard,
    DataService,
    UpdateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
