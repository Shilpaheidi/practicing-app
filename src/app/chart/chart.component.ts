import { Component } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent {
  chartType: ChartType = 'bar';
  chartData: ChartData<'bar'> = {
    labels: ['Jan', 'Feb', 'Mar'],
    datasets: [
      { label: 'Sales', data: [10, 20, 15], backgroundColor: 'skyblue' }
    ]
  };
}
