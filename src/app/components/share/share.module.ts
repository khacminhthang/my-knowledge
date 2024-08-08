import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageZoomComponent } from './image-zoom/image-zoom.component';
import { ShareDataService } from './service/sharedata.service';

@NgModule({
  declarations: [ImageZoomComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    ImageZoomComponent,
  ],
  providers: [ShareDataService]
})
export class ShareModule { }
