import { TaskRoutingModule } from './task-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardTaskInfoComponent } from './component/card-task-info/card-task-info.component';
import { ComboboxTaskComponent } from './component/combobox-task/combobox-task.component';
import { TaskPageComponent } from './page/task-page/task-page.component';
import { TaskRPCCall } from './taskrpc.service';
import { MatModule } from '../mat/mat.module';
import { FormInterpretorTaskComponent } from './component/form-interpretor-task/form-interpretor-task.component';
import { FormTaskInfoComponent } from './component/form-task-info/form-task-info.component';
import { TaskListComponent } from './component/task-list/task-list.component';

@NgModule({
  declarations: [
    CardTaskInfoComponent,
    ComboboxTaskComponent,
    TaskPageComponent,
    FormInterpretorTaskComponent,
    FormTaskInfoComponent,
    TaskListComponent
  ],
  providers: [TaskRPCCall],
  imports: [CommonModule, MatModule, TaskRoutingModule],
  exports: [ComboboxTaskComponent]
})
export class TaskModule {}
