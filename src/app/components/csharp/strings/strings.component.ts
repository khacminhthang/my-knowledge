import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-strings',
  templateUrl: './strings.component.html',
  styleUrls: ['./strings.component.css']
})
export class StringsComponent implements OnInit {
  text1 = `
using System;

namespace Csharp
{
    class TestCsharp
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Cac cach tao chuoi trong C#");
            Console.WriteLine("-------------------------------------");

            //su dung phep gan hang chuoi va toan tu noi chuoi
            string fname, lname;
            fname = "Tran Minh";
            lname = "Chinh";

            string fullname = fname + " " + lname;
            Console.WriteLine("Ho va ten: {0}", fullname);

            //su dung constructor cua lop string
            char[] letters = { 'H', 'e', 'l', 'l', 'o' };
            string greetings = new string(letters);
            Console.WriteLine("Loi chao bang tieng Anh: {0}", greetings);

            //tu cac phuong thuc ma tra ve mot chuoi
            string[] sarray = { "xxxx", "xin", "chao", "cac","ban" };
            string message = String.Join(" ", sarray);
            Console.WriteLine("Thong diep: {0}", message);

            //dinh dang phuong thuc de chuyen doi mot gia tri
            DateTime waiting = new DateTime(2016, 8, 1, 17, 58, 1);
            string chat = String.Format("Thong diep duoc gui luc {0:t} ngay {0:D}", waiting);
            Console.WriteLine("Thong diep: {0}", chat);

            Console.ReadKey();
        }
    }

  `
  constructor() { }

  ngOnInit(): void {
  }

}
