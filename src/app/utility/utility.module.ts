import { MatModule } from './../mat/mat.module';
import { NgModule } from '@angular/core';
import { ChipListNavComponent } from './chip-list-nav';
import { StateColorDotComponent } from './state-color-dot';

const element = [ChipListNavComponent, StateColorDotComponent];

@NgModule({
  declarations: element,
  exports: element,
  imports: [MatModule],
  providers: []
})
export class UtilityModule {}
