
import { Component, Input, OnInit, ViewChild } from '@angular/core'
import { MatSidenav } from '@angular/material/sidenav';
import { ShareDataService } from 'src/app/components/share/service/sharedata.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  mobileQuery: MediaQueryList
  @ViewChild('snav') snav!: MatSidenav;
  @Input() menuList: any;

  constructor(
    private shareDataService: ShareDataService
  ) { }


  ngOnInit() {
    this.shareDataService.matSnavStatus.subscribe(status => {
      this.snav?.toggle(!status);
    });
  }

}
