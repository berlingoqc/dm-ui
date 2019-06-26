import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTaskInfoComponent } from './component/card-task-info/card-task-info.component';
import { ComboboxTaskComponent } from './component/combobox-task/combobox-task.component';
import { TaskPageComponent } from './page/task-page/task-page.component';
import { TaskRPCCall } from './taskrpc.service';
import { MatModule } from '../mat/mat.module';

@NgModule({
  declarations: [CardTaskInfoComponent, ComboboxTaskComponent, TaskPageComponent],
  providers: [TaskRPCCall],
  imports: [CommonModule, MatModule]
})
export class TaskModule {}
