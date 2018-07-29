import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientCompany';
  results = '';
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    this.http.get('https://morning-headland-92448.herokuapp.com/api/v1/companies').subscribe(data => {
      console.log(data);
    });
  }
}
