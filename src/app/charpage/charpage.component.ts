import { Component, Input } from '@angular/core';

export interface CharData { name?: string, image?: string, species?: string, status?: string }
@Component({
  selector: 'app-charpage',
  templateUrl: './charpage.component.html',
  styleUrls: ['./charpage.component.css']
})
export class CharpageComponent {
  @Input() char: CharData = history.state.data;
  
  ngOnInit() {
    console.log(this.char);
  }
}
