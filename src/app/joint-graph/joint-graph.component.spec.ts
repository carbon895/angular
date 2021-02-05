import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JointGraphComponent } from './joint-graph.component';

describe('JointGraphComponent', () => {
  let component: JointGraphComponent;
  let fixture: ComponentFixture<JointGraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JointGraphComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JointGraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
