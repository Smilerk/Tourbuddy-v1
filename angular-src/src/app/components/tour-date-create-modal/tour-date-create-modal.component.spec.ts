import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { TourDateCreateModalComponent } from "./tour-date-create-modal.component";

describe("TourDateCreateModalComponent", () => {
  let component: TourDateCreateModalComponent;
  let fixture: ComponentFixture<TourDateCreateModalComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [TourDateCreateModalComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(TourDateCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
