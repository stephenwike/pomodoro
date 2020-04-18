import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PomodoroAttributesComponent } from './pomodoro-attributes.component';

describe('PomodoroAttributesComponent', () => {
  let component: PomodoroAttributesComponent;
  let fixture: ComponentFixture<PomodoroAttributesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PomodoroAttributesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PomodoroAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
