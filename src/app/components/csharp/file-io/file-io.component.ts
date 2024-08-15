import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-file-io',
  templateUrl: './file-io.component.html',
  styleUrls: ['./file-io.component.css']
})
export class FileIoComponent implements OnInit {

  text1 = `FileStream <tên_đối_tượng> = new FileStream( <tên_file>, <FileMode>, <FileAccess>, <FileShare>);`;
  text2 = `FileStream F = new FileStream("sample.txt", FileMode.Open, FileAccess.Read, FileShare.Read);`;
  text3 = `
  using System;
  using System.IO;

  namespace xxxx
  {
      class TestCsharp
      {
          static void Main(string[] args)
          {
              Console.WriteLine("Vi du minh hoa File I/O trong C#");
              Console.WriteLine("---------------------------------");

              FileStream F = new FileStream("binary.dat", FileMode.OpenOrCreate, FileAccess.ReadWrite);
              for (int i = 1; i <= 20; i++)
              {
                  F.WriteByte((byte)i);
              }

              F.Position = 0;
              for (int i = 0; i <= 20; i++)
              {
                  Console.Write(F.ReadByte() + " ");
              }
              F.Close();

              Console.ReadKey();
          }
      }
  }
  `
  constructor() { }

  ngOnInit(): void {
  }

}
