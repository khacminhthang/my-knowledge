import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit {
  text1 = `
  <access specifier> class  tên_lớp
  {
    // các biến thành viên
    <access specifier> <kiểu_dữ_liệu> biến1;
    <access specifier> <kiểu_dữ_liệu> biến2;
    ...
    <access specifier> <kiểu_dữ_liệu> biếnN;
    
    // các phương thức thành viên
    <access specifier> <kiểu_trả_về> tên_phương_thức1(danh_sách_tham_số)
    {
        // phần thân phương thức
    }
    <access specifier> <kiểu_trả_về> tên_phương_thức2(danh_sách_tham_số)
    {
        // phần thân phương thức
    }
    ...
    <access specifier> <kiểu_trả_về> tên_phương_thứcN(danh_sách_tham_số)
    {
        // phần thân phương thức
    }
  }
  `

  text2 = `
  using System;

  namespace xxxxCsharp
  {
      class Box
      {
          public double chieu_dai;   
          public double chieu_rong;  
          public double chieu_cao; 
      }
  }
  `
  text3 = `
  using System;
  namespace xxxxCsharp
  {
      public class TestCsharp
      {
          public static void Main(string[] args)
          {
              Console.WriteLine("Class trong C#");
              Console.WriteLine("------------------------");

              Box Box1 = new Box();   // tao doi tuong Box1
              Box Box2 = new Box();   // tao doi tuong Box2
              double the_tich = 0.0;  // the tich cua box

              // thong tin cua box1
              Box1.chieu_cao = 5.0;
              Box1.chieu_dai = 6.0;
              Box1.chieu_rong = 7.0;

              // thong tin cua box2
              Box2.chieu_cao = 10.0;
              Box2.chieu_dai = 12.0;
              Box2.chieu_rong = 13.0;

              // Tinh va in the tich cua box1
              the_tich = Box1.chieu_cao * Box1.chieu_dai * Box1.chieu_rong;
              Console.WriteLine("The tich cua Box1 la: {0}", the_tich);

              // Tinh va in the tich cua box2
              the_tich = Box2.chieu_cao * Box2.chieu_dai * Box2.chieu_rong;
              Console.WriteLine("The tich cua Box2 la: {0}", the_tich);

              Console.ReadKey();
          }
      }
  }
  `
  text4 = `
  using System;

  namespace xxxxCsharp
  {
      class Box
      {
          private double chieu_dai;   
          private double chieu_rong;  
          private double chieu_cao;   
          public void setChieuDai(double len)
          {
              chieu_dai = len;
          }

          public void setChieuRong(double bre)
          {
              chieu_rong = bre;
          }

          public void setChieuCao(double hei)
          {
              chieu_cao = hei;
          }
          public double tinhTheTich()
          {
              return chieu_dai * chieu_rong * chieu_cao;
          }
      }
  }
  `
  text5 = `
  using System;
  namespace xxxxCsharp
  {
      public class TestCsharp
      {
          public static void Main(string[] args)
          {
              Console.WriteLine("Class trong C#");
              Console.WriteLine("------------------------");

              Box Box1 = new Box();   // tao doi tuong Box1
              Box Box2 = new Box();   // tao doi tuong Box2
              double the_tich;

              // nhap thong tin cho Box1
              Box1.setChieuDai(6.0);
              Box1.setChieuRong(7.0);
              Box1.setChieuCao(5.0);

              // nhap thong tin cho Box2
              Box2.setChieuDai(12.0);
              Box2.setChieuRong(13.0);
              Box2.setChieuCao(10.0);

              // tinh va in the tich Box1
              the_tich = Box1.tinhTheTich();
              Console.WriteLine("The tich Box1 la: {0}", the_tich);

              // tinh va in the tich Box2
              the_tich = Box2.tinhTheTich();
              Console.WriteLine("The tich Box2 la: {0}", the_tich);

              Console.ReadKey();
          }
      }
  }
  `
  text6 = `
  using System;

namespace xxxxCsharp
{
    class Line
    {
        private double chieu_dai;  
        public Line()
        {
            Console.WriteLine("Doi tuong dang duoc tao");
        }

        public void setChieuDai(double len)
        {
            chieu_dai = len;
        }

        public double getChieuDai()
        {
            return chieu_dai;
        }

        static void Main(string[] args)
        {
            Console.WriteLine("Constructor trong C#");
            Console.WriteLine("---------------------");
            //tao doi tuong Line bang constructor
            Line line = new Line();

            // thiet lap chieu dai cho duong
            line.setChieuDai(6.0);
            Console.WriteLine("Chieu dai cua duong la: {0}", line.getChieuDai());
            Console.ReadKey();
        }
    }
}
  `
  text7 = `
  using System;

  namespace xxxxCsharp
  {
      class Line
      {
          private double chieu_dai;
          public Line(double len)  //constructor co tham so
          {
              Console.WriteLine("Doi tuong dang duoc tao, chieu dai = {0}", len);
              chieu_dai = len;
          }
          public void setChieuDai(double len)
          {
              chieu_dai = len;
          }

          public double getChieuDai()
          {
              return chieu_dai;
          }

          static void Main(string[] args)
          {
              Console.WriteLine("Constructor trong C#");
              Console.WriteLine("---------------------");
              //tao doi tuong Line bang constructor
              Line line = new Line(10.0);
              Console.WriteLine("Chieu dai cua duong la: {0}", line.getChieuDai());

              // thiet lap chieu dai cho duong
              line.setChieuDai(6.0);
              Console.WriteLine("Chieu dai cua duong la: {0}", line.getChieuDai());
              Console.ReadKey();
          }
      }
  }
  `
  text8 = `
  using System;

  namespace xxxxCsharp
  {
      class Line
      {
          private double chieu_dai;
          public Line()  //constructor
          {
              Console.WriteLine("Doi tuong dang duoc tao.");
          }

          ~Line() // destructor
          {
              Console.WriteLine("Doi tuong dang bi xoa!!!");
          }

          public void setChieuDai(double len)
          {
              chieu_dai = len;
          }

          public double getChieuDai()
          {
              return chieu_dai;
          }

          static void Main(string[] args)
          {
              Console.WriteLine("Constructor trong C#");
              Console.WriteLine("---------------------");
              //tao doi tuong Line bang constructor
              Line line = new Line();
              // thiet lap chieu dai cho duong
              line.setChieuDai(6.0);
              Console.WriteLine("Chieu dai cua duong la: {0}", line.getChieuDai());
              Console.ReadKey();
          }
      }
  } 
  `
  text9 = `
  using System;

  namespace xxxxCsharp
  {
      class ThanhVienStatic
      {
          public static int num; //thanh vien static
          public void count()
          {
              num++;
          }
          public int getNum()
          {
              return num;
          }
      }
  }
  `
  text10 = `
  using System;
  namespace xxxxCsharp
  {
      public class TestCsharp
      {
          public static void Main(string[] args)
          {
              Console.WriteLine("Thanh vien Static trong C#");
              Console.WriteLine("------------------------");

              //tao cac doi tuong ThanhVienStatic
              ThanhVienStatic s1 = new ThanhVienStatic();
              ThanhVienStatic s2 = new ThanhVienStatic();
              //goi phuong thuc count()
              s1.count();
              s1.count();
              s1.count();
              s2.count();
              s2.count();
              s2.count();
              Console.WriteLine("Gia tri bien num cho doi tuong s1 la: {0}", s1.getNum());
              Console.WriteLine("Gia tri bien num cho doi tuong s2 la: {0}", s2.getNum());

              Console.ReadKey();
          }
      }
  }
  `
  text11 = `
  using System;

  namespace xxxxCsharp
  {
      class ThanhVienStatic
      {
          public static int num; // thanh vien static
          public void count()
          {
              num++;
          }
          //phuong thuc static
          public static int getNum()
          {
              return num;
          }
      }
  }
  `
  text12 = `
  using System;
  namespace xxxxCsharp
  {
      public class TestCsharp
      {
          public static void Main(string[] args)
          {
              Console.WriteLine("Phuong thuc Static trong C#");
              Console.WriteLine("------------------------");

              //tao cac doi tuong ThanhVienStatic
              ThanhVienStatic s = new ThanhVienStatic();
              //goi phuong thuc
              s.count();
              s.count();
              s.count();
              Console.WriteLine("Gia tri cua num: {0}", ThanhVienStatic.getNum());

              Console.ReadKey();
          }
      }
  }
  `
  constructor() { }

  ngOnInit(): void {
  }

}
