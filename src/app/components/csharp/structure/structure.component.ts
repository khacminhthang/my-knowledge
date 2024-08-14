import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structure',
  templateUrl: './structure.component.html',
  styleUrls: ['./structure.component.css']
})
export class StructureComponent implements OnInit {
  text1 = `
  struct Books
  {
    public string ten_sach;
    public string tac_gia;
    public string the_loai;
    public int ma_sach;
  }; 
  `;
  text2 = `
  using System;

//cau truc book
struct Book
{
    public string ten_sach;
    public string tac_gia;
    public string the_loai;
    public int ma_sach;
};

namespace Csharp
{
    class TestCsharp
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Struct trong C#");
            Console.WriteLine("----------------------------");

            Book Book1;   /* khai bao Book1 thuoc kieu cau truc Book */
            Book Book2;   /* khai bao Book2 thuoc kieu cau truc Book */

            /* thong tin chi tiet ve Book1 */
            Book1.ten_sach = "English Grammar in Use";
            Book1.tac_gia = "Raymond Murphy";
            Book1.the_loai = "Tieng Anh";
            Book1.ma_sach = 6495407;

            /* thong tin chi tiet ve Book2 */
            Book2.ten_sach = "Toan hoc cao cap";
            Book2.tac_gia = "Tran Van A";
            Book2.the_loai = "Toan hoc";
            Book2.ma_sach = 6495700;

            /* in cac thong tin cua Book1*/
            Console.WriteLine("In thong tin cua cuon sach 1:");
            Console.WriteLine("Ten sach: {0}", Book1.ten_sach);
            Console.WriteLine("Tac gia: {0}", Book1.tac_gia);
            Console.WriteLine("The loai: {0}", Book1.the_loai);
            Console.WriteLine("Ma sach: {0}", Book1.ma_sach);

            /* in cac thong tin cua Book2 */
            Console.WriteLine("In thong tin cua cuon sach 2:");
            Console.WriteLine("Ten sach: {0}", Book2.ten_sach);
            Console.WriteLine("Tac gia: {0}", Book2.tac_gia);
            Console.WriteLine("The loai: {0}", Book2.the_loai);
            Console.WriteLine("Ma sach: {0}", Book2.ma_sach);

            Console.ReadKey();
        }
    }
}
  `

  text3 = `
  using System;
struct Book
{
    private string ten_sach;
    private string tac_gia;
    private string the_loai;
    private int ma_sach;
    public void nhapGiaTri(string t, string a, string s, int id)
    {
        ten_sach = t;
        tac_gia = a;
        the_loai = s;
        ma_sach = id;
    }
    public void display()
    {
        Console.WriteLine("Tieu de: {0}", ten_sach);
        Console.WriteLine("Tac gia: {0}", tac_gia);
        Console.WriteLine("The loai: {0}", the_loai);
        Console.WriteLine("Ma sach: {0}", ma_sach);
    }

};

public class TestCsharp
{
    public static void Main(string[] args)
    {
        Console.WriteLine("Struct trong C#");
        Console.WriteLine("------------------------");
        Book Book1 = new Book();   /* Khai bao Book1 thuoc kieu cau truc Book */
        Book Book2 = new Book();   /* Khai bao Book2 thuoc kieu cau truc Book */

        /* thong tin Book1 */
        Book1.nhapGiaTri("English Grammer in Use",
        "Raymond Murphy", "Tieng Anh", 6495407);

        /* thong tin book2 */
        Book2.nhapGiaTri("Toan hoc cao cap",
        "Tran Van A", "Toan hoc", 6495700);

        /* In thong tin Book1 */
        Console.WriteLine("In thong tin cua cuon sach 1:");
        Book1.display();

        /* In thong tin Book2 */
        Console.WriteLine("In thong tin cua cuon sach 2:");
        Book2.display();

        Console.ReadKey();

    }
}

  `
  constructor() { }

  ngOnInit(): void {
  }

}
