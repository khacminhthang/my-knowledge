import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nx-module-federation-technical-overview',
  templateUrl: './nx-module-federation-technical-overview.component.html',
  styleUrls: ['./nx-module-federation-technical-overview.component.css']
})
export class NxModuleFederationTechnicalOverviewComponent implements OnInit {

  text1 = `nx run-many -t build --projects={listOfStaticRemotes}`;
  constructor() { }

  ngOnInit(): void {
  }

}
