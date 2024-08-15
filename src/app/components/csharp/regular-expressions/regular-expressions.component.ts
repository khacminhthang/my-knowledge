import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-regular-expressions',
  templateUrl: './regular-expressions.component.html',
  styleUrls: ['./regular-expressions.component.css']
})
export class RegularExpressionsComponent implements OnInit {

  text1 = `
  using System;
  using System.Text.RegularExpressions;

  namespace xxxx
  {
      class TestCsharp
      {
          private static void showMatch(string text, string expr)
          {
              Console.WriteLine("Expression: " + expr);
              MatchCollection mc = Regex.Matches(text, expr);
              foreach (Match m in mc)
              {
                  Console.WriteLine(m);
              }
          }

          static void Main(string[] args)
          {
              Console.WriteLine("Vi du minh hoa Regular Expression trong C#");
              Console.WriteLine("-----------------------------------------");

              string str = "Sao hom nay lai thay sao suyen son sang";

              Console.WriteLine("So khop voi cac tu bat dau bang chu cai 'S': ");
              showMatch(str, @"\bS\S*");
              Console.ReadKey();
          }
      }
  }
  `
  text2 = `
  using System;
  using System.Text.RegularExpressions;

  namespace xxxx
  {
      class TestCsharp
      {
          private static void showMatch(string text, string expr)
          {
              Console.WriteLine("Expression: " + expr);
              MatchCollection mc = Regex.Matches(text, expr);
              foreach (Match m in mc)
              {
                  Console.WriteLine(m);
              }
          }

          static void Main(string[] args)
          {
              Console.WriteLine("Vi du minh hoa Regular Expression trong C#");
              Console.WriteLine("-----------------------------------------");

              string str = "Sao hom nay lai thay sao suyen son sang";

              Console.WriteLine("So khop voi tu bat dau bang 's' va ket thuc bang 'n':");
              showMatch(str, @"\bs\S*n\b");
              Console.ReadKey();
          }
      }
  }
  `
  text3 = `
  using System;
  using System.Text.RegularExpressions;

  namespace xxxx
  {
      class TestCsharp
      {
          static void Main(string[] args)
          {
              Console.WriteLine("Vi du minh hoa Regular Expression trong C#");
              Console.WriteLine("-----------------------------------------");

              string str1 = "Hello   World   ";
              string pattern = "\\s+";
              string str2 = " ";
              Regex rgx = new Regex(pattern);
              string result = rgx.Replace(str1, str2);

              Console.WriteLine("Chuoi ban dau: {0}", str1);
              Console.WriteLine("Chuoi sau khi da thay the: {0}", result);

              Console.ReadKey();
          }
      }
  }
  `
  constructor() { }

  ngOnInit(): void {
  }

}
