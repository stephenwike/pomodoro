import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { PomodoroListComponent } from './pomodoro-list/pomodoro-list.component';
import { PomodoroTimerComponent } from './pomodoro-timer/pomodoro-timer.component';
import { PomodoroStatisticsComponent } from './pomodoro-statistics/pomodoro-statistics.component';
import { PomodoroAttributesComponent } from './shared/pomodoro-attributes/pomodoro-attributes.component';
import { PomodorosPerDayComponent } from './pomodoro-statistics/charts/pomodoros-per-day/pomodoros-per-day.component';
import { PomodoroPerFieldComponent } from './pomodoro-statistics/charts/pomodoro-per-field/pomodoro-per-field.component';

@NgModule({
  declarations: [
    AppComponent,
    PomodoroListComponent,
    PomodoroTimerComponent,
    PomodoroStatisticsComponent,
    PomodoroAttributesComponent,
    PomodorosPerDayComponent,
    PomodoroPerFieldComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxChartsModule
  ],
  exports: [
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
