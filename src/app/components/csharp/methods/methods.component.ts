import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-methods',
  templateUrl: './methods.component.html',
  styleUrls: ['./methods.component.css']
})
export class MethodsComponent implements OnInit {

  text1 = `
  <Access Specifier> <Kiểu_trả_về> <tên_phương_thức>(danh_sách_tham_số)
  {
    phần thân phương thức
  }
  `
  constructor() { }

  ngOnInit(): void {
  }

}
