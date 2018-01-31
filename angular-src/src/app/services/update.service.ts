import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
@Injectable()
export class UpdateService {
  private updateSource = new Subject<boolean>();

  update = this.updateSource.asObservable();

  updateTour(update: boolean) {
    this.updateSource.next(update);
  }

  constructor() {}
}
