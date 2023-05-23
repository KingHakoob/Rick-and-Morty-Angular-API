import { Component } from '@angular/core';
import { ApifetchService } from './apifetch.service';

export interface ApiData {
  info?: Object,
  results?: Array<{ name?: string, image?: string, species?: string, status?: string }>
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'dekokjapi';
  data: ApiData = {};

  constructor(private _apiservice: ApifetchService){}

  ngOnInit(){
    this._apiservice.getData().subscribe(res => {
      this.data = res;
      console.log(this.data);
    })
  }
}
