import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reflection',
  templateUrl: './reflection.component.html',
  styleUrls: ['./reflection.component.css']
})
export class ReflectionComponent implements OnInit {

  text1 = `System.Reflection.MemberInfo info = typeof(MyClass);`
  text2 = `
  using System;

  namespace Csharp
  {
      [AttributeUsage(AttributeTargets.All)]
      public class HelpAttribute : System.Attribute
      {
          public readonly string Url;

          public string Topic   // Topic la mot name parameter
          {
              get
              {
                  return topic;
              }
              set
              {
                  topic = value;
              }
          }

          public HelpAttribute(string url) // url la mot positional parameter
          {
              this.Url = url;
          }
          private string topic;
      }
  }
  `
  text3 = `
  using System;

  namespace Csharp
  {
      [HelpAttribute("Thong tin tren lop MyClass")]
      class MyClass
      {
      }
  }
  `
  text4 = `
  using System;

  namespace Csharp
  {
      class TestCsharp
      {
          static void Main(string[] args)
          {
              Console.WriteLine("Reflection trong C#");
              Console.WriteLine("--------------------------");
              
              System.Reflection.MemberInfo info = typeof(MyClass);
              object[] attributes = info.GetCustomAttributes(true);
              for (int i = 0; i < attributes.Length; i++)
              {
                  System.Console.WriteLine(attributes[i]);
              }

              Console.ReadKey();
          }
      }
  }
  `
  text5 = `
  using System;

  namespace Csharp
  {
      [DeBugInfo(45, "Tran Nam", "2/8/2016", Message = "Kieu tra ve khong hop le")]
      [DeBugInfo(49, "Minh Chinh", "10/10/2016", Message = "Bien khong duoc su dung")]

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
          [DeBugInfo(56, "Minh Chinh", "19/10/2016")]
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
  using System.Reflection;

  namespace Csharp
  {
      //Mot custom attribute BugFix 
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

  }
  `
  text7 = `
  using System;
  using System.Reflection;

  namespace Csharp
  {
      class TestCsharp
      {
          static void Main(string[] args)
          {
              Console.WriteLine("Reflection trong C#");
              Console.WriteLine("------------------------------------");

              Rectangle r = new Rectangle(4.5, 7.5);
              r.Display();
              Type type = typeof(Rectangle);

              //lap qua cac attribtue cua lop Rectangle
              foreach (Object attributes in type.GetCustomAttributes(false))
              {
                  DeBugInfo dbi = (DeBugInfo)attributes;
                  if (null != dbi)
                  {
                      Console.WriteLine("Bug no: {0}", dbi.BugNo);
                      Console.WriteLine("Developer: {0}", dbi.Developer);
                      Console.WriteLine("Last Reviewed: {0}", dbi.LastReview);
                      Console.WriteLine("Remarks: {0}", dbi.Message);
                  }
              }

              //lap qua cac method attribtue
              foreach (MethodInfo m in type.GetMethods())
              {
                  foreach (Attribute a in m.GetCustomAttributes(true))
                  {
                      DeBugInfo dbi = (DeBugInfo)a;
                      if (null != dbi)
                      {
                          Console.WriteLine("Bug no: {0}, for Method: {1}", dbi.BugNo, m.Name);
                          Console.WriteLine("Developer: {0}", dbi.Developer);
                          Console.WriteLine("Last Reviewed: {0}", dbi.LastReview);
                          Console.WriteLine("Remarks: {0}", dbi.Message);
                      }
                  }
              }

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
