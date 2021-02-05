import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicrosoftChartsComponent } from './microsoft-charts.component';

describe('MicrosoftChartsComponent', () => {
  let component: MicrosoftChartsComponent;
  let fixture: ComponentFixture<MicrosoftChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicrosoftChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicrosoftChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
