import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourCreateModalComponent } from './tour-create-modal.component';

describe('TourCreateModalComponent', () => {
  let component: TourCreateModalComponent;
  let fixture: ComponentFixture<TourCreateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourCreateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
