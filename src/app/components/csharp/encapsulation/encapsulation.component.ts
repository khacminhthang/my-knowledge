import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-encapsulation',
  templateUrl: './encapsulation.component.html',
  styleUrls: ['./encapsulation.component.css']
})
export class EncapsulationComponent implements OnInit {
  text1 = `
using System;

namespace Csharp
{
    class Rectangle
    {
        //cac bien thanh vien
        public double length;
        public double width;

        //cac phuong thuc
        public double GetArea()
        {
            return length * width;
        }
        public void Display()
        {
            Console.WriteLine("Chieu dai: {0}", length);
            Console.WriteLine("Chieu rong: {0}", width);
            Console.WriteLine("Dien tich: {0}", GetArea());
        }
    }
}
  `
  text2 = `
using System;

namespace Csharp
{
    class ExecuteRectangle
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Tinh dong goi trong C#");
            Console.WriteLine("-------------------------------");

            //tao doi tuong Rectangle
            Rectangle r = new Rectangle();
            //thiet lap cac thuoc tinh
            r.length = 4.5;
            r.width = 3.5;
            //goi phuong thuc
            r.Display();
            Console.ReadLine();

            Console.ReadKey();
        }
    }
}
  `;

  text3 = `
using System;

namespace Csharp
{
    class Rectangle
    {
        //cac bien thanh vien
        private double length;
        private double width;

        //cac phuong thuc
        public void Acceptdetails()
        {
            Console.WriteLine("Nhap chieu dai: ");
            length = Convert.ToDouble(Console.ReadLine());
            Console.WriteLine("Nhap chieu rong: ");
            width = Convert.ToDouble(Console.ReadLine());
        }
        public double GetArea()
        {
            return length * width;
        }
        public void Display()
        {
            Console.WriteLine("Chieu dai: {0}", length);
            Console.WriteLine("Chieu rong: {0}", width);
            Console.WriteLine("Dien tich: {0}", GetArea());
        }
    }
}
  `

  text4 = `
using System;

namespace Csharp
{
    class ExecuteRectangle
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Tinh dong goi trong C#");
            Console.WriteLine("-------------------------------");

            //tao doi tuong Rectangle
            Rectangle r = new Rectangle();
            //thiet lap cac thuoc tinh
            r.length = 4.5;
            r.width = 3.5;
            //goi phuong thuc
            r.Acceptdetails();
            r.Display();
            Console.ReadLine();

            Console.ReadKey();
        }
    }
}
  `

  text5 = `
  using System;

namespace Csharp
{
    class Rectangle
    {
        //cac bien thanh vien
        internal double length;
        internal double width;

        //cac phuong thuc
        double GetArea()
        {
            return length * width;
        }
        public void Display()
        {
            Console.WriteLine("Chieu dai: {0}", length);
            Console.WriteLine("Chieu rong: {0}", width);
            Console.WriteLine("Dien tich: {0}", GetArea());
        }
    }
}
  `

  text6 = `
  using System;

namespace Csharp
{
    class ExecuteRectangle
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Tinh dong goi trong C#");
            Console.WriteLine("-------------------------------");

            //tao doi tuong Rectangle
            Rectangle r = new Rectangle();
            //thiet lap cac thuoc tinh
            r.length = 4.5;
            r.width = 3.5;
            //goi phuong thuc
            r.Display();
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
