import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-charcard',
  templateUrl: './charcard.component.html',
  styleUrls: ['./charcard.component.css']
})
export class CharcardComponent {
  @Input() name = '';
  @Input() image = '';
  @Input() species = '';
  @Input() status = '';
}
