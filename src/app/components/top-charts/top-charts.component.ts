import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-top-charts',
  templateUrl: './top-charts.component.html',
  styleUrls: ['./top-charts.component.scss']
})
export class TopChartsComponent implements OnInit {

  @Output() name: string;

  constructor() {
    this.name = "Top charts";
  }

  ngOnInit() {
  }

}
