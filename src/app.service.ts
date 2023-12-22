import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { RESSortStudent } from './app/res-interfaces/Response';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  //todo move to environment file
  private APP_URL: string = 'http://localhost:8081/taskapp/sortStudents'

  constructor(private http: HttpClient) { }

  public sortStudentData(formData: any): void {

    this.http.post(this.APP_URL, formData)
      .subscribe(

        {
          next: (res) => console.log(res),
          error: (err) => console.error(err)
        }
      )

  }

}