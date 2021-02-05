import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YandexChartsComponent } from './yandex-charts.component';

describe('YandexChartsComponent', () => {
  let component: YandexChartsComponent;
  let fixture: ComponentFixture<YandexChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YandexChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YandexChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
