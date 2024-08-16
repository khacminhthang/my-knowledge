import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attributes',
  templateUrl: './attributes.component.html',
  styleUrls: ['./attributes.component.css']
})
export class AttributesComponent implements OnInit {

  text1=`
  [attribute(positional_parameter, name_parameter = giá_trị, ...)]
  element
  `
  text2=`
  [AttributeUsage(
   validon,
   AllowMultiple=allowmultiple,
   Inherited=inherited
  )]
  `
  text3 = `
  [AttributeUsage(AttributeTargets.Class |
  AttributeTargets.Constructor |
  AttributeTargets.Feild |
  AttributeTargets.Method |
  AttributeTargets.Property, 
  AllowMultiple = true)]
  `
  text4 = `
  [Conditional(
   conditionalSymbol
  )]
  `
  text5 = `
  [Conditional("DEBUG")]
  `
  text6 = `
  #define DEBUG
  using System;
  using System.Diagnostics;

  namespace Csharp
  {
      class TestAttribute
      {
          [Conditional("DEBUG")]
          public static void Message(string msg)
          {
              Console.WriteLine(msg);
          }
      }
  }
  `
  text7 =`
  using System;

  namespace Csharp
  {
      class TestCsharp
      {
          static void function1()
          {
              TestAttribute.Message("Trong Function 1.");
              function2();
          }
          static void function2()
          {
              TestAttribute.Message("Trong Function 2.");
          }

          public static void Main()
          {
              Console.WriteLine("Attribute trong C#");
              Console.WriteLine("-----------------------");

              TestAttribute.Message("Trong ham Main.");
              function1();
              Console.ReadKey();
          }
      }
  }
  `
  text8 = `
  [Obsolete(
   message
  )]
  [Obsolete(
    message,
    iserror
  )]
  `
  text9 = `
  using System;

  namespace Csharp
  {
      class TestCsharp
      {
          [Obsolete("Dung su dung PhuongThuc1, ban nen su dung PhuongThuc2", true)]
          static void PhuongThuc1()
          {
              Console.WriteLine("Day la phuong thuc 1.");
          }
          static void PhuongThuc2()
          {
              Console.WriteLine("Day la phuong thuc 2.");
          }
          public static void Main()
          {
              PhuongThuc1(); // co dau gach do bao hieu tai day
          }
      }
  }
  `
  text10 = `
  'Csharp.TestCsharp.PhuongThuc1()' is obsolete: 'Dung su dung PhuongThuc1, ban nen su dung PhuongThuc2'
  `
  text11 =`
  //a custom attribute BugFix to be assigned to a class and its members
  [AttributeUsage(AttributeTargets.Class |
  AttributeTargets.Constructor |
  AttributeTargets.Field |
  AttributeTargets.Method |
  AttributeTargets.Property,
  AllowMultiple = true)]

  public class DeBugInfo : System.Attribute
  `
  text12 = `
  //Vi du minh hoa mot custom attribute BugFix
  [AttributeUsage(AttributeTargets.Class |
  AttributeTargets.Constructor |
  AttributeTargets.Field |
  AttributeTargets.Method |
  AttributeTargets.Property,
  AllowMultiple = true)]

  public class DeBugInfo : System.Attribute
  {
    private int bugNo;
    private string developer;
    private string lastReview;
    public string message;
    
    public DeBugInfo(int bg, string dev, string d)
    {
        this.bugNo = bg;
        this.developer = dev;
        this.lastReview = d;
    }
    
    public int BugNo
    {
        get
        {
          return bugNo;
        }
    }
    
    public string Developer
    {
        get
        {
          return developer;
        }
    }
    
    public string LastReview
    {
        get
        {
          return lastReview;
        }
    }
    
    public string Message
    {
        get
        {
          return message;
        }
        set
        {
          message = value;
        }
    }
  }
  `
  text13 = `
  [DeBugInfo(45, "Tran Nam", "2/8/2016", Message = "Kieu tra ve khong hop le")]
  [DeBugInfo(49, "Minh Chinh", "10/10/2016", Message = "Bien chua duoc su dung")]
  class Rectangle
  {
    //cac bien thanh vien
    protected double chieu_dai;
    protected double chieu_rong;
    public Rectangle(double l, double w)
    {
        chieu_dai = l;
        chieu_rong = w;
    }
    [DeBugInfo(55, "Tran Nam", "2/8/2016", Message = "Kieu tra ve khong hop le")]
    
    public double tinhDienTich()
    {
        return chieu_dai * chieu_rong;
    }
    [DeBugInfo(56, "Minh Chinh", "10/10/2016")]
    
    public void Display()
    {
        Console.WriteLine("Chieu dai: {0}", chieu_dai);
        Console.WriteLine("Chieu rong: {0}", chieu_rong);
        Console.WriteLine("Dien tich: {0}", tinhDienTich());
    }
  }
  `

  constructor() { }

  ngOnInit(): void {
  }

}
