import { Component } from '@angular/core';
import {ItemLinkComponent} from './item-link/item-link.component';

@Component({
  selector: 'app-header-left',
  standalone: true,
  imports: [
    ItemLinkComponent,
  ],
  templateUrl: './header-left.component.html',
  styleUrl: './header-left.component.scss'
})
export class HeaderLeftComponent {
   items = [
    {Name: 'ĐẶT HÀNG'},
    {Name: 'NHƯỢNG QUYỀN'},
    {Name: 'CỬA HÀNG'},
    {Name: 'VỀ LOTTERIA'}
  ];
}
