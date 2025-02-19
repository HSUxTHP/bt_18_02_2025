import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-list-item',
  standalone: true,
  imports: [],
  templateUrl: './list-item.component.html',
  styleUrl: './list-item.component.scss'
})
export class ListItemComponent {
  @Input()src!: string;
  @Input()name!: string;
  @Input()item1!: string;
  @Input()item2!: string;
  @Input()price!: string;
  @Input()oldprice!: string;
}
