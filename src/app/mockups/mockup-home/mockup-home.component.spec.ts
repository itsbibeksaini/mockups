import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MockupHomeComponent } from './mockup-home.component';

describe('MockupHomeComponent', () => {
  let component: MockupHomeComponent;
  let fixture: ComponentFixture<MockupHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MockupHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MockupHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
