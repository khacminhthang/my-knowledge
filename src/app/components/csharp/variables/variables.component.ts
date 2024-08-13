import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {

  text1 = `<kiểu_dữ_liệu> <danh_sách_biến>;`;
  constructor() { }

  ngOnInit(): void {
  }

}
