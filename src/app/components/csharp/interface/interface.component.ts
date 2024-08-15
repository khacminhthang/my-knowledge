import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html',
  styleUrls: ['./interface.component.css']
})
export class InterfaceComponent implements OnInit {

  text1 = `
  public interface ITransactions
  {
    // các thành viên của interface
    
    //các phương thức
    void hienThiThongTinGiaoDich();
    double laySoLuong();
  }
  `
  text2 = `
  using System;

  namespace xxxx
  {
      public interface GiaoDich
      {
          // cac thanh vien cua interface

          //cac phuong thuc
          void hienThiThongTinGiaoDich();
          double laySoLuong();
      }
  }
  `
  text3 = `
  using System;

  namespace xxxx
  {
      class GiaoDichHangHoa : GiaoDich
      {
        private string ma_hang_hoa;
        private string ngay;
        private double so_luong;
        public GiaoDichHangHoa()
        {
            ma_hang_hoa = " ";
            ngay = " ";
            so_luong = 0.0;
        }

        public GiaoDichHangHoa(string c, string d, double a)
        {
            ma_hang_hoa = c;
            ngay = d;
            so_luong = a;
        }
        
        public double laySoLuong()
        {
            return so_luong;
        }
        
        public void hienThiThongTinGiaoDich()
        {
            Console.WriteLine("Ma hang hoa: {0}", ma_hang_hoa);
            Console.WriteLine("Ngay giao dich: {0}", ngay);
          Console.WriteLine("So luong: {0}", laySoLuong());
        }
      }
  }
  `
  text4 = `
  using System;
  namespace xxxx
  {
      public class TestCsharp
      {
          static void Main(string[] args)
          {
              Console.WriteLine("Interface trong C#");
              Console.WriteLine("Vi du minh hoa interface");
              Console.WriteLine("--------------------------");

              //tao cac doi tuong GiaoDichHangHoa
              GiaoDichHangHoa t1 = new GiaoDichHangHoa("001", "8/10/2012", 78900.00);
              GiaoDichHangHoa t2 = new GiaoDichHangHoa("002", "9/10/2012", 451900.00);
              t1.hienThiThongTinGiaoDich();
              t2.hienThiThongTinGiaoDich();

              Console.ReadKey();
          }
      }
  }
  `
  constructor() { }

  ngOnInit(): void {
  }

}
