import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppleChartsComponent } from './apple-charts.component';

describe('AppleChartsComponent', () => {
  let component: AppleChartsComponent;
  let fixture: ComponentFixture<AppleChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppleChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppleChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
