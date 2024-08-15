import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-namespaces',
  templateUrl: './namespaces.component.html',
  styleUrls: ['./namespaces.component.css']
})
export class NamespacesComponent implements OnInit {

  text1 = `
  namespace tên_namespace
  {
    // phần khai báo code
  }
  `
  text2 = `
  tên_namespace.tên_phần_tử;
  `
  text3 = `
  using System;
  namespace first_namespace
  {
      class namespace_cl
      {
          public void func()
          {
              Console.WriteLine("Ben trong namespace thu nhat!");
          }
      }
  }

  namespace second_namespace
  {
      class namespace_cl
      {
          public void func()
          {
              Console.WriteLine("Ben trong namespace thu hai!");
          }
      }
  }

  class TesCsharp
  {
      static void Main(string[] args)
      {
          Console.WriteLine("namespace trong C#");
          Console.WriteLine("Vi du minh hoa cach su dung cua namespace");
          Console.WriteLine("------------------------------------------");

          first_namespace.namespace_cl fc = new first_namespace.namespace_cl();
          second_namespace.namespace_cl sc = new second_namespace.namespace_cl();
          fc.func();
          sc.func();
          Console.ReadKey();
      }
  }
  `
  text4 = `
  Console.WriteLine ("Hoc C# co ban va nang cao!!!");
  `
  text5 = `
  System.Console.WriteLine("Hoc C# co ban va nang cao!!!");
  `
  text6 = `
  using System;
  using first_namespace;
  using second_namespace;

  namespace first_namespace
  {
      class namespace_cl
      {
          public void func()
          {
              Console.WriteLine("Ben trong namespace thu nhat!");
          }
      }
  }

  namespace second_namespace
  {
      class namespace_cl
      {
          public void func()
          {
              Console.WriteLine("Ben trong namespace thu hai!");
          }
      }
  }

  class TesCsharp
  {
      static void Main(string[] args)
      {
          Console.WriteLine("namespace trong C#");
          Console.WriteLine("Vi du minh hoa cach su dung cua namespace");
          Console.WriteLine("------------------------------------------");

          first_namespace.namespace_cl fc = new first_namespace.namespace_cl();
          second_namespace.namespace_cl sc = new second_namespace.namespace_cl();
          fc.func();
          sc.func();
          Console.ReadKey();
      }
  }
  `
  text7 = `
  namespace tên_namespace_1
  {
    // phần khai báo code
    namespace tên_namespace_2
    {
        // phần khai báo code
    }
  }
  `
  text8 = `
  using System;
  using first_namespace;
  using first_namespace.second_namespace;

  namespace first_namespace
  {
      class abc
      {
          public void func()
          {
              Console.WriteLine("Ben trong namespace thu nhat!");
          }
      }
      namespace second_namespace
      {
          class efg
          {
              public void func()
              {
                  Console.WriteLine("Ben trong namespace thu hai!");
              }
          }
      }
  }

  class TestCsharp
  {
      static void Main(string[] args)
      {
          Console.WriteLine("namespace trong C#");
          Console.WriteLine("Vi du minh hoa cach su dung cua namespace");
          Console.WriteLine("------------------------------------------");

          abc fc = new abc();
          efg sc = new efg();
          fc.func();
          sc.func();
          Console.ReadKey();
      }
  }
  `
  constructor() { }

  ngOnInit(): void {
  }

}
