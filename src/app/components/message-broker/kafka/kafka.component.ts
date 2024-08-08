import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-kafka',
  templateUrl: './kafka.component.html',
  styleUrls: ['./kafka.component.css']
})
export class KafkaComponent implements OnInit {

  text1 = `{
	key: "Violet",
	value: "Made a payment of $100 to Alex",
	timestamp: "Jun. 25, 2023, at 2:06 p.m."
}`;

  constructor() { }

  ngOnInit(): void {
  }

}
