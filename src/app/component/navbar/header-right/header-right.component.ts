import { Component } from '@angular/core';
import {HeaderRightTopComponent} from './header-right-top/header-right-top.component';
import {HeaderRightBottomComponent} from './header-right-bottom/header-right-bottom.component';

@Component({
  selector: 'app-header-right',
  standalone: true,
  imports: [
    HeaderRightTopComponent,
    HeaderRightBottomComponent
  ],
  templateUrl: './header-right.component.html',
  styleUrl: './header-right.component.scss'
})
export class HeaderRightComponent {

}
