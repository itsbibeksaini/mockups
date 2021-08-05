import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskboardsDashboardComponent } from './taskboards-dashboard.component';

describe('TaskboardsDashboardComponent', () => {
  let component: TaskboardsDashboardComponent;
  let fixture: ComponentFixture<TaskboardsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskboardsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaskboardsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
