import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enums',
  templateUrl: './enums.component.html',
  styleUrls: ['./enums.component.css']
})
export class EnumsComponent implements OnInit {
  text1 = `
  enum <tên_enum> 
  {
    danh_sách_enum
  };
  `
  text2 = `
  enum Days { Sun, Mon, tue, Wed, thu, Fri, Sat };
  `
  text3 = `
  using System;
namespace Csharp
{
    public class TestCsharp
    {
        enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat };
        public static void Main(string[] args)
        {
            Console.WriteLine("Enum trong C#");
            Console.WriteLine("------------------------");

            int dau_tuan = (int)Days.Mon;
            int cuoi_tuan = (int)Days.Fri;
            Console.WriteLine("Thu hai: {0}", dau_tuan);
            Console.WriteLine("Thu sau: {0}", cuoi_tuan);
            Console.ReadKey();

        }
    }
}
  `
  constructor() { }

  ngOnInit(): void {
  }

}
