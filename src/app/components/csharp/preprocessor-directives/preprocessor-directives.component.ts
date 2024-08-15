import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preprocessor-directives',
  templateUrl: './preprocessor-directives.component.html',
  styleUrls: ['./preprocessor-directives.component.css']
})
export class PreprocessorDirectivesComponent implements OnInit {
  
  text1 =`
  #define symbol
  `
  text2=`
  #define PI
  using System;

  namespace xxxx
  {
      class TestClass
      {
          static void Main(string[] args)
          {
              Console.WriteLine("Chi thi tien xu ly trong C#");
              Console.WriteLine("Vi du minh hoa chi thi tien xu ly #define");
              Console.WriteLine("------------------------------------------");
              #if (PI)
                Console.WriteLine("PI da duoc dinh nghia");
              #else
                Console.WriteLine("PI chua duoc dinh nghia");
              #endif
              Console.ReadKey();
          }
      }
  }
  `
  text3 = `#if symbol [operator symbol]...`
  text4 =`
  #define DEBUG
  #define VC_V10
  using System;

  namespace xxxx
  {
      class TestClass
      {
          static void Main(string[] args)
          {
              Console.WriteLine("Chi thi tien xu ly trong C#");
              Console.WriteLine("Vi du minh hoa chi thi tien xu ly #define");
              Console.WriteLine("------------------------------------------");

              #if (DEBUG && !VC_V10)
                Console.WriteLine("DEBUG da duoc dinh nghia");
              #elif (!DEBUG && VC_V10)
                Console.WriteLine("VC_V10 da duoc dinh nghia");
              #elif (DEBUG && VC_V10)
                Console.WriteLine("DEBUG va VC_V10 da duoc dinh nghia");
              #else
                Console.WriteLine("DEBUG va VC_V10 chua duoc dinh nghia");
              #endif
              Console.ReadKey();
          }
      }
  }
  `
  constructor() { }

  ngOnInit(): void {
  }

}
