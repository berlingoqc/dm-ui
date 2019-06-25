import { AddVideoComponent } from './add-video/add-video.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { MatModule } from '../mat/mat.module';

@NgModule({
  declarations: [AddVideoComponent, DashboardComponent],
  imports: [CommonModule, MatModule, FormsModule],
  exports: [AddVideoComponent, DashboardComponent]
})
export class YdlUiModule {}
