import { Component, OnInit } from '@angular/core';
import {Http, Response} from '@angular/http';
import { HttpClient } from '@angular/common/http';
declare var angular: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientCompany';

  private apiUrl = 'https://morning-headland-92448.herokuapp.com/api/v1/companies';
  data: any = {};
  constructor(private http: HttpClient){
    console.log('went into the constructor');
  }
  ngOnInit(): void {
    this.http.get('https://morning-headland-92448.herokuapp.com/api/v1/companies').subscribe(data => {
      this.data = data;
    
    });
  }
}
