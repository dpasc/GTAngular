import { Component } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { ObjectUnsubscribedError } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GTAng';
  private data:any = []
  travelPackageid: number
  city =""
  constructor(private http: HttpClient){}


  getData(){
    const url = 'https://localhost:44376/api/travelpackage?city='
    this.http.get(url+this.city).subscribe((res)=>
    {
      this.data=res
      console.log(this.data)

    })
  }

  getKeys(input){
    return Object.keys(input)

  }

}

//'https://localhost:44376/api/travelpackage?city=';