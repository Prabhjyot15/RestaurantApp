import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalOrderDetailsComponent } from './final-order-details.component';

describe('FinalOrderDetailsComponent', () => {
  let component: FinalOrderDetailsComponent;
  let fixture: ComponentFixture<FinalOrderDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinalOrderDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
