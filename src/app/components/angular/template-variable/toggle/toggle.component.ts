import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {

  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggle() {
    this.show = !this.show;
  }

}
