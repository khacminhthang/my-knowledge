import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() title: string = '';
  @Input() content: string = '';
  @Input() type: string = 'info'; // Các loại như 'info', 'warning', 'error', etc.

  constructor() { }

  ngOnInit(): void {
  }

  getClasses() {
    return {
      'note-info': this.type === 'info',
      'note-warning': this.type === 'warning',
      'note-error': this.type === 'error'
    };
  }

  // Chia content thành các đoạn dựa trên ngắt dòng
  getContentParagraphs(): string[] {
    return this.content.split('\n'); // Tách nội dung bằng ký tự ngắt dòng
  }

}
