import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";
@Injectable()
export class UpdateService {
  private tourUpdateSource = new Subject<boolean>();
  private contactUpdateSource = new Subject<boolean>();

  tourUpdate = this.tourUpdateSource.asObservable();
  contactUpdate = this.contactUpdateSource.asObservable();

  updateContacts(contactUpdate: boolean) {
    this.contactUpdateSource.next(contactUpdate);
  }
  
  updateTour(tourUpdate: boolean) {
    this.tourUpdateSource.next(tourUpdate);
  }

  constructor() {}
}
