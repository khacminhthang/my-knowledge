import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageZoomComponent } from './image-zoom/image-zoom.component';
import { ShareDataService } from './service/sharedata.service';
import { NoteComponent } from './note/note.component';
import { HighlightCodeDirective } from './highlight-code.directive';

@NgModule({
  declarations: [
    ImageZoomComponent,
    NoteComponent,
    HighlightCodeDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    ImageZoomComponent,
    NoteComponent,
    HighlightCodeDirective
  ],
  providers: [ShareDataService]
})
export class ShareModule { }
