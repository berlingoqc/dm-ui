import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-interpretor-task',
  templateUrl: './form-interpretor-task.component.html',
  styleUrls: ['./form-interpretor-task.component.sass']
})
export class FormInterpretorTaskComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onFileSelected(event) {
    let reader = new FileReader();

    if (event.target.files && event.target.files.length) {
      const [file] = event.target.files;
      reader.readAsArrayBuffer(file);

      reader.onload = () => {
        console.log(reader.result);
      };
    }
  }
}
