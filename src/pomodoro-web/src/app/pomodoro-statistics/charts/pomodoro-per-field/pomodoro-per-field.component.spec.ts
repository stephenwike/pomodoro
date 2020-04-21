import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomodoroPerFieldComponent } from './pomodoro-per-field.component';

describe('PomodoroAttributesComponent', () => {
  let component: PomodoroPerFieldComponent;
  let fixture: ComponentFixture<PomodoroPerFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomodoroPerFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomodoroPerFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
