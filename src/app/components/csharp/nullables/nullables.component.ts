import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nullables',
  templateUrl: './nullables.component.html',
  styleUrls: ['./nullables.component.css']
})
export class NullablesComponent implements OnInit {
  text1=`
  < kiểu_dữ_liệu > ? <tên_biến> = null;
  `;
  text2 = `
using System;
namespace Csharp
{
    class TestCsharp
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Nullable trong C#");
            Console.WriteLine("-----------------");
            int? num1 = null;
            int? num2 = 45;
            double? num3 = new double?();
            double? num4 = 3.14157;

            bool? boolval = new bool?();

            // hien thi gia tri
            Console.WriteLine("Minh hoa gia tri Nullable kieu int: {0}, {1}, {2}, {3}", num1, num2, num3, num4);
            Console.WriteLine("Minh hoa gia tri Nullable kieu boolean: {0}", boolval);
            Console.ReadLine();

            Console.ReadKey();
        }
    }
}
  `
  text3 = `
using System;
namespace Csharp
{
    class TestCsharp
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Nullable trong C#");
            Console.WriteLine("--------------");
            double? num1 = null;
            double? num2 = 3.14157;
            double num3;
            num3 = num1 ?? 5.34;
            Console.WriteLine("Gia tri cua num3 la: {0}", num3);
            num3 = num2 ?? 5.34;
            Console.WriteLine("Gia tri cua num3 la: {0}", num3);
            Console.ReadLine();

            Console.ReadKey();
        }
    }
}
  `
  constructor() { }

  ngOnInit(): void {
  }

}
