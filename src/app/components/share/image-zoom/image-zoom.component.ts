import { Component, Input, OnInit } from '@angular/core';
import { ShareDataService } from '../service/sharedata.service';

@Component({
  selector: 'app-image-zoom',
  templateUrl: './image-zoom.component.html',
  styleUrls: ['./image-zoom.component.css']
})
export class ImageZoomComponent implements OnInit {

  @Input() imageUrl = '';
  @Input() alt = '';
  isZoomed = false;
  constructor(
    private shareDataService: ShareDataService
  ) { }

  ngOnInit(): void {
  }

  toggleZoom() {
    this.isZoomed = !this.isZoomed;
    this.shareDataService.matSnavStatus.next(this.isZoomed);
  }

}
