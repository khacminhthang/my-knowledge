import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-constants-and-literals',
  templateUrl: './constants-and-literals.component.html',
  styleUrls: ['./constants-and-literals.component.css']
})
export class ConstantsAndLiteralsComponent implements OnInit {

  text1 = `
    212         /* hợp lệ */
    215u        /* hợp lệ */
    0xFeeL      /* hợp lệ */
    078         /* không hợp lệ: 8 không phải là chữ số trong hệ cơ số 8 */
    032UU       /* không hợp lệ: không thể lặp lại hậu tố */
  `;
  text2 = `
    85         /* thập phân */
    0213       /* hệ cơ số 8 */
    0x4b       /* hệ cơ số 16 */
    30         /* int */
    30u        /* unsigned int */
    30l        /* long */
    30ul       /* unsigned long */
  `;

  text3 = `
  3.14159       /* hợp lệ */
  314159E-5L    /* hợp lệ */
  510E          /* không hợp lệ: phần exponent chưa hoàn thành */
  210f          /* không hợp lệ: thiếu phần decimal hoặc exponent */
  .e55          /* không hợp lệ: thiếu phần integer hoặc fraction */
  `;
  text4 =`
  "hello, dear"
  "hello, \
  dear"
  "hello, " "d" "ear"
  @"hello dear"
  `;

  text5=`const <kiểu_dữ_liệu> <tên_hằng> = giá_trị;`;
  constructor() { }

  ngOnInit(): void {
  }

}
