import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactCreateModalComponent } from './contact-create-modal.component';

describe('ContactCreateModalComponent', () => {
  let component: ContactCreateModalComponent;
  let fixture: ComponentFixture<ContactCreateModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactCreateModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactCreateModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
