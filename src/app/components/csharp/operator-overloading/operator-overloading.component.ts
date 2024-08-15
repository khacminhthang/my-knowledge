import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-operator-overloading',
  templateUrl: './operator-overloading.component.html',
  styleUrls: ['./operator-overloading.component.css']
})
export class OperatorOverloadingComponent implements OnInit {

  text1= `
  public static Box operator+ (Box b, Box c)
  {
    Box box = new Box();
    box.chieu_dai = b.chieu_dai + c.chieu_dai;
    box.chieu_rong = b.chieu_rong + c.chieu_rong;
    box.chieu_cao = b.chieu_cao + c.chieu_cao;
    return box;
  }
  `
  text2 = `
  using System;

  namespace xxxx
  {
      class Box
      {
          private double chieu_dai;   
          private double chieu_rong;  
          private double chieu_cao;   

          public double tinhTheTich()
          {
              return chieu_dai * chieu_rong * chieu_cao;
          }

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

          // nap chong toan tu + de cong hai doi tuong Box.
          public static Box operator +(Box b, Box c)
          {
              Box box = new Box();
              box.chieu_dai = b.chieu_dai + c.chieu_dai;
              box.chieu_rong = b.chieu_rong + c.chieu_rong;
              box.chieu_cao = b.chieu_cao + c.chieu_cao;
              return box;
          }
      }
  }
  `
  text3 = `
  using System;
  namespace xxxx
  {
      public class TestCsharp
      {
          static void Main(string[] args)
          {
              Console.WriteLine("Nap chong toan tu trong C#");
              Console.WriteLine("Vi du minh hoa nap chong toan tu");
              Console.WriteLine("--------------------------");
              //tao cac doi tuong Box1, Box2 va Box3
              Box Box1 = new Box();   
              Box Box2 = new Box();   
              Box Box3 = new Box();  
              double the_tich = 0.0;   

              // nhap thong tin Box1
              Box1.setChieuDai(6.0);
              Box1.setChieuRong(7.0);
              Box1.setChieuCao(5.0);

              // nhap thong tin Box2
              Box2.setChieuDai(12.0);
              Box2.setChieuRong(13.0);
              Box2.setChieuCao(10.0);

              // tinh va hien thi the tich Box1
              the_tich = Box1.tinhTheTich();
              Console.WriteLine("The tich cua Box1 la: {0}", the_tich);

              // tinh va hien thi the tich Box2
              the_tich = Box2.tinhTheTich();
              Console.WriteLine("The tich cua Box2 la: {0}", the_tich);

              // con hai doi tuong
              Box3 = Box1 + Box2;

              // tinh va hien thi the tich Box3
              the_tich = Box3.tinhTheTich();
              Console.WriteLine("The tich cua Box3 la: {0}", the_tich);

              Console.ReadKey();
          }
      }
  }
  `
  text4 =  `
  using System;

  namespace xxxx
  {
      class Box
      {
          private double chieu_dai;   
          private double chieu_rong;  
          private double chieu_cao;   

          public double tinhTheTich()
          {
              return chieu_dai * chieu_rong * chieu_cao;
          }

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

          // nap chong toan tu +
          public static Box operator +(Box b, Box c)
          {
              Box box = new Box();
              box.chieu_dai = b.chieu_dai + c.chieu_dai;
              box.chieu_rong = b.chieu_rong + c.chieu_rong;
              box.chieu_cao = b.chieu_cao + c.chieu_cao;
              return box;
          }
          //nap chong toan tu ==
          public static bool operator ==(Box lhs, Box rhs)
          {
              bool status = false;
              if (lhs.chieu_dai == rhs.chieu_dai && lhs.chieu_cao == rhs.chieu_cao && lhs.chieu_rong == rhs.chieu_rong)
              {
                  status = true;
              }
              return status;
          }
          //nap chong toan tu !=
          public static bool operator !=(Box lhs, Box rhs)
          {
              bool status = false;
              if (lhs.chieu_dai != rhs.chieu_dai || lhs.chieu_cao != rhs.chieu_cao || lhs.chieu_rong != rhs.chieu_rong)
              {
                  status = true;
              }
              return status;
          }
          //nap chong toan tu <
          public static bool operator <(Box lhs, Box rhs)
          {
              bool status = false;
              if (lhs.chieu_dai < rhs.chieu_dai && lhs.chieu_cao < rhs.chieu_cao && lhs.chieu_rong < rhs.chieu_rong)
              {
                  status = true;
              }
              return status;
          }
          //nap chong toan tu >
          public static bool operator >(Box lhs, Box rhs)
          {
              bool status = false;
              if (lhs.chieu_dai > rhs.chieu_dai && lhs.chieu_cao > rhs.chieu_cao && lhs.chieu_rong > rhs.chieu_rong)
              {
                  status = true;
              }
              return status;
          }
          //nap chong toan tu <=
          public static bool operator <=(Box lhs, Box rhs)
          {
              bool status = false;
              if (lhs.chieu_dai <= rhs.chieu_dai && lhs.chieu_cao <= rhs.chieu_cao && lhs.chieu_rong <= rhs.chieu_rong)
              {
                  status = true;
              }
              return status;
          }
          //nap chong toan tu >=
          public static bool operator >=(Box lhs, Box rhs)
          {
              bool status = false;
              if (lhs.chieu_dai >= rhs.chieu_dai && lhs.chieu_cao >= rhs.chieu_cao && lhs.chieu_rong >= rhs.chieu_rong)
              {
                  status = true;
              }
              return status;
          }
          //nap chong phuong thuc ToString()
          public override string ToString()
          {
              return String.Format("({0}, {1}, {2})", chieu_dai, chieu_rong, chieu_cao);
          }
      }
  }
  `
  text5 = `
  using System;
  namespace xxxx
  {
      public class TestCsharp
      {
          static void Main(string[] args)
          {
              Console.WriteLine("Nap chong toan tu trong C#");
              Console.WriteLine("Vi du minh hoa nap chong toan tu");
              Console.WriteLine("--------------------------");
              //tao cac doi tuong Box1, Box2, Box2, Box4
              Box Box1 = new Box();  
              Box Box2 = new Box();   
              Box Box3 = new Box();   
              Box Box4 = new Box();
              double the_tich = 0.0;    

              // nhap thong tin Box1
              Box1.setChieuDai(6.0);
              Box1.setChieuRong(7.0);
              Box1.setChieuCao(5.0);

              // nhap thong tin Box2
              Box2.setChieuDai(12.0);
              Box2.setChieuRong(13.0);
              Box2.setChieuCao(10.0);

              //hien thi thong tin cac Box boi su dung phuong thuc nap chong ToString():
              Console.WriteLine("Thong tin Box 1: {0}", Box1.ToString());
              Console.WriteLine("Thong tin Box 2: {0}", Box2.ToString());

              // tinh the tich Box1
              the_tich = Box1.tinhTheTich();
              Console.WriteLine("The tich cua Box1 la: {0}", the_tich);

              // tinh the tich Box2
              the_tich = Box2.tinhTheTich();
              Console.WriteLine("The tich cua Box2 la: {0}", the_tich);

              // cong hai doi tuong
              Box3 = Box1 + Box2;
              Console.WriteLine("Thong tin Box 3: {0}", Box3.ToString());

              // tinh the tich cua Box3
              the_tich = Box3.tinhTheTich();
              Console.WriteLine("The tich cua Box3 la: {0}", the_tich);

              //so sanh cac Box
              if (Box1 > Box2)
                  Console.WriteLine("Box1 la lon hon Box2");
              else
                  Console.WriteLine("Box1 la khong lon hon Box2");

              if (Box1 < Box2)
                  Console.WriteLine("Box1 la nho hon Box2");
              else
                  Console.WriteLine("Box1 la khong nho hon Box2");

              if (Box1 >= Box2)
                  Console.WriteLine("Box1 la lon hon hoac bang Box2");
              else
                  Console.WriteLine("Box1 la khong lon hon hoac bang Box2");

              if (Box1 <= Box2)
                  Console.WriteLine("Box1 la nho hon hoac bang Box2");
              else
                  Console.WriteLine("Box1 la khong nho hon hoac bang Box2");

              if (Box1 != Box2)
                  Console.WriteLine("Box1 la khong bang Box2");
              else
                  Console.WriteLine("Box1 bang Box2");
              Box4 = Box3;

              if (Box3 == Box4)
                  Console.WriteLine("Box3 bamg Box4");
              else
                  Console.WriteLine("Box3 la khong bang Box4");

              Console.ReadKey();
          }
      }
  }
  `
  constructor() { }

  ngOnInit(): void {
  }

}
