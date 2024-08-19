import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nx-installation',
  templateUrl: './nx-installation.component.html',
  styleUrls: ['./nx-installation.component.css']
})
export class NxInstallationComponent implements OnInit {
  text1 = `npx create-nx-workspace`;
  constructor() { }

  ngOnInit(): void {
  }

}
