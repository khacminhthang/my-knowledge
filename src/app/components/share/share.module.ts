import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageZoomComponent } from './image-zoom/image-zoom.component';
import { ShareDataService } from './service/sharedata.service';
import { NoteComponent } from './note/note.component';

@NgModule({
  declarations: [
    ImageZoomComponent,
    NoteComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ImageZoomComponent,
    NoteComponent
  ],
  providers: [ShareDataService]
})
export class ShareModule { }
