import { Component, Input } from '@angular/core';
import { ApifetchService } from '../apifetch.service';
import { Router } from '@angular/router';

export interface ApiData {
  info?: Object,
  results?: Array<{ name?: string, image?: string, species?: string, status?: string }>
}

@Component({
  selector: 'app-cardpage',
  templateUrl: './cardpage.component.html',
  styleUrls: ['./cardpage.component.css']
})
export class CardpageComponent {
  @Input() page: number = 1;

  title = 'dekokjapi';
  data: ApiData = {};

  constructor(private _apiservice: ApifetchService, private router: Router) { }

  // goto2(){
  //   this.router.navigate(["/child2"])
  // }

  public charPage() {
    this.router.navigate(["/charpage"])
  }

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
