import { AddVideoComponent } from './add-video/add-video.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatModule } from '../mat/mat.module';
import { YdlRoutingModule } from './ydl-routing.module';

@NgModule({
  declarations: [AddVideoComponent, DashboardComponent],
  imports: [CommonModule, MatModule, FormsModule, YdlRoutingModule],
  exports: [AddVideoComponent, DashboardComponent]
})
export class YdlUiModule {}
