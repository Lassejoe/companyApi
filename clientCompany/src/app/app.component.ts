import { Component } from '@angular/core';
import { Http, Response} from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clientCompany';
  private apiUrl = 'https://morning-headland-92448.herokuapp.com/api/v1/companies';
  data: any = {};

  constructor(private http: Http){
    console.log('went into the constructor');
    this.getCompanies();
    this.getData();
  }
  getData(){
    return this.http.get(this.apiUrl).pipe(map(res: Response) => res.json())
  }
  getCompanies(){
    this.getData().subcribe(data => {
      console.log(data);
      this.data = data;
    })
  }
}
