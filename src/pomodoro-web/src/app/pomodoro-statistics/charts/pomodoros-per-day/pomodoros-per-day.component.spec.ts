import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomodorosPerDayComponent } from './pomodoros-per-day.component';

describe('PomodorosPerDayComponent', () => {
  let component: PomodorosPerDayComponent;
  let fixture: ComponentFixture<PomodorosPerDayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomodorosPerDayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomodorosPerDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
