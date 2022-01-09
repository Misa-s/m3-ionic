import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { SchedulePageRoutingModule } from './schedule-routing.module';
import { SchedulePage } from './schedule.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SchedulePageRoutingModule
  ],
  declarations: [SchedulePage]
})
export class SchedulePageModule {}
