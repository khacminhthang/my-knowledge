import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exception-handling',
  templateUrl: './exception-handling.component.html',
  styleUrls: ['./exception-handling.component.css']
})
export class ExceptionHandlingComponent implements OnInit {

  text1 = `
  try
  {
    // các lệnh có thể gây ra ngoại lệ (exception)
  }
  catch( tên_ngoại_lệ e1 )
  {
    // phần code để xử lý lỗi
  }
  catch( tên_ngoại_lệ e2 )
  {
    // phần code để xử lý lỗi
  }
  catch( tên_ngoại_lệ eN )
  {
    // phần code để xử lý lỗi
  }
  finally
  {
    // các lệnh được thực thi
  }
  `
  text2 = `
  using System;

  namespace xxxx
  {
      class TestCsharp
      {
          int result;
          TestCsharp()
          {
              result = 0;
          }
          public void phepChia(int num1, int num2)
          {
              try
              {
                  result = num1 / num2;
              }
              catch (DivideByZeroException e)
              {
                  Console.WriteLine("Bat Exception: {0}", e);
              }
              finally
              {
                  Console.WriteLine("Ket qua: {0}", result);
              }
          }
          static void Main(string[] args)
          {
              Console.WriteLine("Vi du minh hoa Exception trong C#");
              Console.WriteLine("---------------------------------");

              TestCsharp d = new TestCsharp();
              d.phepChia(25, 0);
              Console.ReadKey();
          }
      }
  }
  `
  text3 = `
  using System;

  namespace xxxx
  {
      class Temperature
      {
          int temperature = 0;
          public void showTemp()
          {
              if (temperature == 0)
              {
                  throw (new TempIsZeroException("Muc nhiet do 0!!!"));
              }
              else
              {
                  Console.WriteLine("Nhiet do: {0}", temperature);
              }
          }
      }
  }
  `
  text4 = `
  using System;
  namespace xxxx
  {
      class TempIsZeroException : ApplicationException
      {
          public TempIsZeroException(string message)
              : base(message)
          {
          }
      }
  }
  `
  text5 = `
  using System;

  namespace xxxx
  {
      class TestCsharp
      {
          static void Main(string[] args)
          {
              Console.WriteLine("Vi du minh hoa Xu ly ngoai le trong C#");
              Console.WriteLine("---------------------------------");

              Temperature temp = new Temperature();
              try
              {
                  temp.showTemp();
              }
              catch (TempIsZeroException e)
              {
                  Console.WriteLine("TempIsZeroException: {0}", e.Message);
              }

              Console.ReadKey();
          }
      }
  }
  `
  text6 = `
  Catch(Exception e)
  {
    ...
    Throw e
  }
  `
  constructor() { }

  ngOnInit(): void {
  }

}
