import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDoughuntChartComponent } from './my-doughunt-chart.component';

describe('MyDoughuntChartComponent', () => {
  let component: MyDoughuntChartComponent;
  let fixture: ComponentFixture<MyDoughuntChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyDoughuntChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDoughuntChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
