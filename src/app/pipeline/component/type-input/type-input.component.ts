import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { MatCheckboxChange } from '@angular/material';
import { Params } from 'src/app/task/taskrpc.service';

@Component({
  selector: 'app-type-input',
  templateUrl: './type-input.component.html',
  styleUrls: ['./type-input.component.sass']
})
export class TypeInputComponent implements OnInit {

  @Input() param: Params;

  @Output() dataChange = new EventEmitter<{ field: string, data: any }>();

  @Input()
  set parentForm(pf: FormGroup) {
    this.formGroup = pf;
    this.formGroup.addControl('name', new FormControl(this.param.name, []));
    if (this.isArray()) {
      this.formGroup.addControl('field', new FormArray([]));
    } else {
      this.formGroup.addControl('field', new FormControl('', [Validators.required]));
    }
  }

  formGroup: FormGroup;


  arrayItem: string[] = [];

  constructor() { }

  ngOnInit() {
    console.log(this.param);
  }




  set setValue(da: string) {
    this.dataChange.next({ field: this.param.name, data: da });
  }

  setValueCheckbox(data: MatCheckboxChange) {
    this.dataChange.next({ field: this.param.name, data: data.checked });
  }


  getArrayElement(): string[] {
    if (this.param.type.startsWith('[]')) {
      return JSON.parse(this.param.default_value);
    }
    return [];
  }

  addArrayItem() {
    this.arrayItem.push('');
    (this.formGroup.controls[this.param.name] as FormArray).push(new FormControl('', [Validators.required]));
  }

  deleteArrayItem(index: number) {
    this.arrayItem.splice(index, 1);
    (this.formGroup.controls[this.param.name] as FormArray).removeAt(index);
  }

  isArray(): boolean {
    if (this.param) {
      return this.param.type.startsWith('...') || this.param.type.startsWith('[]');
    }
    return undefined;
  }

  getType(t: string): string {
    switch (t) {
      case 'number':
        return t;
      default:
        return 'text';
    }
  }

}
