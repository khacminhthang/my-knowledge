import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-flow-control',
  templateUrl: './flow-control.component.html',
  styleUrls: ['./flow-control.component.css']
})
export class FlowControlComponent implements OnInit {

  text1 = `Exp1 ? Exp2 : Exp3;`;

  constructor() { }

  ngOnInit(): void {
  }

}
