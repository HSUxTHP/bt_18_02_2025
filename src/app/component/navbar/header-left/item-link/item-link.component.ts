import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-item-link',
  standalone: true,
  imports: [],
  templateUrl: './item-link.component.html',
  styleUrl: './item-link.component.scss'
})
export class ItemLinkComponent {
  @Input() Name! : string;
}
