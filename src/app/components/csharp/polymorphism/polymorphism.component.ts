import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-polymorphism',
  templateUrl: './polymorphism.component.html',
  styleUrls: ['./polymorphism.component.css']
})
export class PolymorphismComponent implements OnInit {

  text1=`
  using System;
  namespace Csharp
  {
      public class TestCsharp
      {
          void print(int i)
          {
              Console.WriteLine("In so nguyen: {0}", i);
          }
          void print(double f)
          {
              Console.WriteLine("In so thuc: {0}", f);
          }
          void print(string s)
          {
              Console.WriteLine("In chuoi: {0}", s);
          }

          static void Main(string[] args)
          {
              Console.WriteLine("Tinh da hinh trong C#");
              Console.WriteLine("--------------------------");
              //tao doi tuong TestCsharp
              TestCsharp p = new TestCsharp();

              // goi ham print()
              p.print(5);
              p.print(500.263);
              p.print("Hoc C# co ban va nang cao");
              Console.ReadKey();
          }
      }
  }
  `
  text2= `
  using System;

  namespace Csharp
  {
      abstract class Shape
      {
          public abstract int tinhDienTich();
      }
  }
  `
  text3 = `
  using System;

  namespace Csharp
  {
      class HinhChuNhat : Shape
      {
          private int chieu_dai;
          private int chieu_rong;
          public HinhChuNhat(int a = 0, int b = 0)
          {
              chieu_dai = a;
              chieu_rong = b;
          }
          public override int tinhDienTich()
          {
              Console.WriteLine("Dien tich hinh chu nhat:");
              return (chieu_rong * chieu_dai);
          }
      }
  }
  `
  text4 = `
  using System;
  namespace Csharp
  {
      public class TestCsharp
      {
          static void Main(string[] args)
          {
              Console.WriteLine("Tinh da hinh trong C#");
              Console.WriteLine("Vi du minh hoa Da hinh dong");
              Console.WriteLine("--------------------------");

              HinhChuNhat r = new HinhChuNhat(10, 7);
              double a = r.tinhDienTich();
              Console.WriteLine("Dien tich: {0}", a);
              Console.ReadKey();
          }
      }
  }
  `
  text5 = `
  using System;

  namespace Csharp
  {
      class Shape
      {
          protected int chieu_rong, chieu_cao;
          public Shape(int a = 0, int b = 0)
          {
              chieu_rong = a;
              chieu_cao = b;
          }
          public virtual int tinhDienTich()
          {
              Console.WriteLine("Dien tich cua class cha: ");
              return 0;
          }
      }
  }
  `
  text6 = `
  using System;

  namespace Csharp
  {
      class HinhChuNhat : Shape
      {
          public HinhChuNhat( int a=0, int b=0): base(a, b)
        {

        }
          public override int tinhDienTich()
        {
          Console.WriteLine("Dien tich cua class HinhChuNhat: ");
          return (chieu_rong * chieu_cao); 
        }
      }
  }
  `
  text7 = `
  using System;

  namespace Csharp
  {
      class TamGiac : Shape
      {
          public TamGiac(int a = 0, int b = 0) : base(a, b)
        {
        
        }
          public override int tinhDienTich()
        {
          Console.WriteLine("Dien tich cua class TamGiac: ");
          return (chieu_cao * chieu_rong / 2); 
        }
      }
  }
  `
  text8 = `
  using System;

  namespace Csharp
  {
      class HienThiDuLieu
      {
          public void hienThiDienTich(Shape sh)
          {
              int a;
              a = sh.tinhDienTich();
              Console.WriteLine("Dien tich: {0}", a);
          }
      }
  }
  `
  text9 = `
  using System;
  namespace Csharp
  {
      public class TestCsharp
      {
          static void Main(string[] args)
          {
              Console.WriteLine("Tinh da hinh trong C#");
              Console.WriteLine("Vi du minh hoa Da hinh dong");
              Console.WriteLine("--------------------------");

              HienThiDuLieu c = new HienThiDuLieu();
              HinhChuNhat r = new HinhChuNhat(10, 7);
              TamGiac t = new TamGiac(10, 5);
              c.hienThiDienTich(r);
              c.hienThiDienTich(t);

              Console.ReadKey();
          }
      }
  }
  `
  constructor() { }

  ngOnInit(): void {
  }

}
