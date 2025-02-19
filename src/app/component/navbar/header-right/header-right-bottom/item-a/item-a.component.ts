import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-item-a',
  standalone: true,
  imports: [],
  templateUrl: './item-a.component.html',
  styleUrl: './item-a.component.scss'
})
export class ItemAComponent {
  @Input()src!: string;
}
