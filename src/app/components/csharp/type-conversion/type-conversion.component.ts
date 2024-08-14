import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-conversion',
  templateUrl: './type-conversion.component.html',
  styleUrls: ['./type-conversion.component.css']
})
export class TypeConversionComponent implements OnInit {

  text1 = `using System;

namespace Csharp
{
    class TestCsharp
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Chuyen doi kieu du lieu trong C#");
            Console.WriteLine("-------------------------------");

            double d = 5678.74;
            int i;

            // cast kieu du lieu double thanh kieu du lieu int.
            i = (int)d;
            Console.WriteLine("Gia tri cua i = " +i);
            Console.ReadKey();
        }
    }
}`;
  constructor() { }

  ngOnInit(): void {
  }

}
