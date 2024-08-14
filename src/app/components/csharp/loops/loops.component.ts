import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loops',
  templateUrl: './loops.component.html',
  styleUrls: ['./loops.component.css']
})
export class LoopsComponent implements OnInit {
  text1 = `
using System;

namespace Csharp
{
    class TestCsharp
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Vong lap vo han trong C#");
            Console.WriteLine("-------------------------------");

            for (; ; )
            {
                Console.WriteLine("Dong nay se duoc in mai mai");
            }
        }
    }
}
`
  constructor() { }

  ngOnInit(): void {
  }

}
