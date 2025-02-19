import { Component } from '@angular/core';
import {ItemAComponent} from './item-a/item-a.component';

@Component({
  selector: 'app-header-right-bottom',
  standalone: true,
  imports: [
    ItemAComponent
  ],
  templateUrl: './header-right-bottom.component.html',
  styleUrl: './header-right-bottom.component.scss'
})
export class HeaderRightBottomComponent {
  srcs = [
    {
      src: 'image/location_on_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png',
    },
    {
      src: 'image/person_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png',
    },
    {
      src: 'image/notifications_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png',
    },
    {
      src: 'image/local_mall_24dp_FFFFFF_FILL0_wght400_GRAD0_opsz24.png',
    },
  ]
}
