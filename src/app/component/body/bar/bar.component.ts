import { Component } from '@angular/core';
import {CardComponent} from './card/card.component';

@Component({
  selector: 'app-bar',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './bar.component.html',
  styleUrl: './bar.component.scss'
})
export class BarComponent {
items=[
  {
    src: "image/MENU_DAT_HANG_BESTSELLER.jpg",
    name: "Bestseller"
  },
  {
    src: "image/MENU_DAT_HANG_KHUYE_N_MA_I_2.jpg",
    name: "Khuyễn mãi"
  },
  {
    src: "image/MENU_DAT_HANG_THU_C_UO_NG_new_3.jpg",
    name: "Thức Uống"
  },
  {
    src: "image/MENU_DAT_HANG_THU_C_A_N_NHE__2.jpg",
    name: "Thức Ăn Nhẹ"
  },
  {
    src: "image/BG-Menu-Chicken-01-01_1.jpg",
    name: "Cơm - Mì Ý"
  },
  {
    src: "image/MENU_DAT_HANG_PHA_N_A_N_NHO_M.jpg",
    name: "Phần Ăn Nhóm"
  },
  {
    src: "image/MENU_DAT_HANG_PHA_N_A_N_NHO_M.jpg",
    name: "Value"
  },
  {
    src: "image/MENU_DAT_HANG_VALUE_m_i_3.jpg",
    name: "Combo"
  },
  {
    src: "image/MENU_DAT_HANG_COMBO_m_i_2.jpg",
    name: "Gà Rán Phần"
  },
  {
    src: "image/MENU_DAT_HANG_GA_RA_N_PHA_N_1.jpg",
    name: "Gà Rán"
  }
];
}
