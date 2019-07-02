import { MatModule } from './../mat/mat.module';
import { NgModule } from '@angular/core';
import { ChipListNavComponent } from './chip-list-nav';

@NgModule({
  declarations: [ChipListNavComponent],
  exports: [ChipListNavComponent],
  imports: [MatModule],
  providers: []
})
export class UtilityModule {}
