import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inheritance',
  templateUrl: './inheritance.component.html',
  styleUrls: ['./inheritance.component.css']
})
export class InheritanceComponent implements OnInit {

  text1 = `
  <acess-specifier> class <base_class>
  {
    ...
  }
  class <derived_class> : <base_class>
  {
    ...
  }
  `
  text2 = `
  using System;

  namespace Csharp
  {
      class Shape
      {

          protected int chieu_rong;
          protected int chieu_cao;
          public void setChieuRong(int w)
          {
              chieu_rong = w;
          }
          public void setChieuCao(int h)
          {
              chieu_cao = h;
          }
      }
  }
  `
  text3 = `
  using System;

  namespace Csharp
  {
      class HinhChuNhat : Shape
      {
          public int tinhDienTich()
          {
              return (chieu_cao * chieu_rong);
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
          public static void Main(string[] args)
          {
              Console.WriteLine("Tinh ke thua trong C#");
              Console.WriteLine("------------------------");

              //tao doi tuong HinhChuNhat
              HinhChuNhat hcn = new HinhChuNhat();

              hcn.setChieuRong(5);
              hcn.setChieuCao(7);

              // in dien tich cua doi tuong.
              Console.WriteLine("Dien tich hinh chu nhat: {0}", hcn.tinhDienTich());

              Console.ReadKey();
          }
      }
  }
  `
  text5 = `
  using System;

  namespace Csharp
  {
      class HinhChuNhat
      {
          //cac bien thanh vien
        protected double chieu_dai;
        protected double chieu_rong;
          // constructor
        public HinhChuNhat(double l, double w)
        {
          chieu_dai = l;
          chieu_rong = w;
        }
        //phuong thuc
        public double tinhDienTich()
        {
          return chieu_dai * chieu_rong;
        }
        
        public void Display()
        {
          Console.WriteLine("Chieu dai: {0}", chieu_dai);
          Console.WriteLine("Chieu rong: {0}", chieu_rong);
          Console.WriteLine("Dien tich: {0}", tinhDienTich());
        }
      }
  }
  `
  text6 = `
  using System;

  namespace Csharp
  {
      class ChiPhiXayDung : HinhChuNhat
      {
          private double cost;
          public ChiPhiXayDung(double l, double w) : base(l, w)
        { }
        public double tinhChiPhi()
        {
          double chi_phi;
          chi_phi = tinhDienTich() * 70;
          return chi_phi;
        }
        public void hienThiThongTin()
        {
          base.Display();
          Console.WriteLine("Chi phi: {0}", tinhChiPhi());
        }
      }
  }
  `
  text7 = `
  using System;
  namespace Csharp
  {
      public class TestCsharp
      {
          public static void Main(string[] args)
          {
              Console.WriteLine("Tinh ke thua trong C#");
              Console.WriteLine("Khoi tao lop co so");
              Console.WriteLine("------------------------");
              //tao doi tuong ChiPhiXayDung
              ChiPhiXayDung t = new ChiPhiXayDung(4.5, 7.5);
              t.hienThiThongTin();
              Console.ReadLine();

              Console.ReadKey();
          }
      }
  }
  `
  text8 = `
  using System;

  namespace Csharp
  {
      class Shape
      {

          protected int chieu_rong;
          protected int chieu_cao;
          public void setChieuRong(int w)
          {
              chieu_rong = w;
          }
          public void setChieuCao(int h)
          {
              chieu_cao = h;
          }
      }
  }
  `
  text9 = `
  using System;

  namespace Csharp
  {
      public interface ChiPhiSon
      {
        int tinhChiPhi(int dien_tich);
      }
  }
  `
  text10 = `
  using System;

  namespace Csharp
  {
      class HinhChuNhat : Shape, ChiPhiSon
      {
          public int tinhDienTich()
          {
              return (chieu_rong * chieu_cao);
          }
          public int tinhChiPhi(int dien_tich)
          {
              return dien_tich * 70;
          }
      }
  }
  `
  text11 = `
  using System;
  namespace Csharp
  {
      public class TestCsharp
      {
          public static void Main(string[] args)
          {
              Console.WriteLine("Tinh ke thua trong C#");
              Console.WriteLine("Vi du minh hoa Da ke thua");
              Console.WriteLine("------------------------------");
              //tao doi tuong HinhChuNhat
              HinhChuNhat hcn = new HinhChuNhat();
              int dien_tich;
              hcn.setChieuRong(5);
              hcn.setChieuCao(7);
              dien_tich = hcn.tinhDienTich();

              // in dien tich va chi phi.
              Console.WriteLine("Tong dien tich: {0}", hcn.tinhDienTich());
              Console.WriteLine("Tong chi phi son: 0", hcn.tinhChiPhi(dien_tich));
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
