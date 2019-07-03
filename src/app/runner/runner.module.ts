import { MatModule } from './../mat/mat.module';
import { RunnerRPC } from './runner-rpc.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgramCardComponent } from './program-card/program-card.component';

@NgModule({
  declarations: [ProgramCardComponent],
  imports: [CommonModule, MatModule],
  exports: [ProgramCardComponent],
  providers: [RunnerRPC]
})
export class RunnerModule {}
