import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyRaderChartComponent } from './my-rader-chart.component';

describe('MyRaderChartComponent', () => {
  let component: MyRaderChartComponent;
  let fixture: ComponentFixture<MyRaderChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyRaderChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyRaderChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
