import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css']
})
export class ArrayComponent implements OnInit {
  text1 = `kiểu_dữ_liệu[] tên_mảng;`;
  text2 = `double[] balance;`;
  text3 = `double[] balance = new double[10];`;
  text4 = `
Bạn có thể gán giá trị cho các phần tử mảng riêng biệt bởi sử dụng chỉ số mảng, như:
double[] balance = new double[10];
balance[0] = 4500.0;

Bạn có thể gán giá trị cho mảng tại thời điểm khai báo mảng, như sau:
double[] balance = { 2340.0, 4523.69, 3421.0};

Bạn cũng có thể tạo và khai báo một mảng, như sau:
int [] marks = new int[5]  { 99,  98, 92, 97, 95};

Bạn cũng có thể bỏ qua kích cỡ mảng, như:
int [] marks = new int[]  { 99,  98, 92, 97, 95};

Bạn có thể sao chép một biến mảng vào trong biến mảng mục tiêu khác. Trong tình huống này, cả biến mục tiêu và biến nguồn đều trỏ tới cùng vị trí bộ nhớ:
int [] marks = new int[]  { 99,  98, 92, 97, 95};
int[] score = marks;
  `;
  text5 = `
  using System;

namespace Csharp
{
    class TestCsharp
    {
        static void Main(string[] args)
        {
            Console.WriteLine("Mang trong C#");
            Console.WriteLine("-----------------------");
            int []  n = new int[10]; /* n la mot mang gom 10 so nguyen */
            int i,j;
            /* khoi tao cac phan tu cua mang n */
            for (i = 0; i < 10; i++)
            {
                n[i] = i + 100;
            }

            /* hien thi gia tri cac phan tu cua mang n */
            for (j = 0; j < 10; j++)
            {
                Console.WriteLine("Phan tu [{0}] = {1}", j, n[j]);
            }
            Console.ReadKey();
        }
    }
}
  `
  constructor() { }

  ngOnInit(): void {
  }

}
