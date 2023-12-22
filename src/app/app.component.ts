import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AppService } from 'src/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'task-app-ui';
  public myForm: FormGroup;
  constructor(public fb: FormBuilder, private http: HttpClient, private appService: AppService) { }
  ngOnInit() {
    this.myForm = this.fb.group({
      sortName: [''],
      inputDataFile: [null]
    })
  }
  uploadFile(event: Event, fileType: string) {
    this.updateFile(event, fileType);
  }
  submitForm() {
    let formData: any = new FormData();
    Object.keys(this.myForm.controls).forEach(formControlName => {
      formData.append(formControlName, this.myForm.get(formControlName).value);
    });

    this.appService.sortStudentData(formData);
  }

  private updateFile(event: Event, formControlName: string) {

    const file = (event.target as HTMLInputElement).files[0];
    this.myForm.controls[formControlName].patchValue([file]);
    this.myForm.get(formControlName).updateValueAndValidity()
  }
}
