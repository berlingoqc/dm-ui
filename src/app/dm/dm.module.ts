import { NgModule } from '@angular/core';
import { MatModule } from './../mat/mat.module';
import { CommonModule } from '@angular/common';
import { SideNavComponent } from './component/side-nav/side-nav.component';

@NgModule({
  declarations: [SideNavComponent],
  exports: [SideNavComponent],
  imports: [CommonModule, MatModule],
  providers: []
})
export class DmModule {}
