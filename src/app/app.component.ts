import { Component, Input } from '@angular/core';
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
  @Input() page: number = 1;

  title = 'dekokjapi';
  data: ApiData = {};

  constructor(private _apiservice: ApifetchService) { }

  public prevPage() {
    if (this.page > 1) {
      this.page--;
      this.ngOnInit();
    }
  }

  public nextPage() {
    if (this.page < 42) {
      this.page++;
      this.ngOnInit();
    }
  }

  ngOnInit() {
    this._apiservice.getData(this.page).subscribe(res => {
      this.data = res;
      console.log(this.data);
    })
  }
}