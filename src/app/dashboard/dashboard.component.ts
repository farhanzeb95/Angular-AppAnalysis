import { Component, OnInit } from '@angular/core';

import { Chart } from 'chart.js';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  lineChart = [];
  BarChart = [];
  PieChart = [];

  constructor() { }

  ngOnInit() {

    // Line Chart
    this.lineChart = new Chart('linechart', {
      type: 'line',

      data: {
        lables: ['jan', 'feb', 'march', 'april', 'may', 'june', 'july', 'aug', 'sept', 'oct', 'nov', 'dec'],
        datasets: [{
          label: 'Logs in an year',
          data: [0, 2, 10, 3, 3, 5, 8, 9, 10, 9, 12, 18],
          fill: false,
          lineTension: 0.5,
          borderColor: 'black',
          borderWidth: 1
        }]
      },
      options: {
        title: {
            text: 'LOGS',
            display: true
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
       }

    });

  // Bar Chart

    this.BarChart = new Chart('barChart', {
    type: 'bar',
  data: {
   labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
   datasets: [{
       label: 'Logs',
       data: [9, 7 , 3, 5, 2, 10],
       backgroundColor: [
           'rgba(255, 99, 132, 0.2)',
           'rgba(54, 162, 235, 0.2)',
           'rgba(255, 206, 86, 0.2)',
           'rgba(75, 192, 192, 0.2)',
           'rgba(153, 102, 255, 0.2)',
           'rgba(255, 159, 64, 0.2)'
       ],
       borderColor: [
           'rgba(255,99,132,1)',
           'rgba(54, 162, 235, 1)',
           'rgba(255, 206, 86, 1)',
           'rgba(75, 192, 192, 1)',
           'rgba(153, 102, 255, 1)',
           'rgba(255, 159, 64, 1)'
       ],
       borderWidth: 1
   }]
  },
  options: {
   title: {
       text: 'Logs',
       display: true
   },
   scales: {
       yAxes: [{
           ticks: {
               beginAtZero: true
           }
       }]
   }
  }
  });

  // pie chart:
    this.PieChart = new Chart('pieChart', {
  type: 'pie',
data: {
 labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
 datasets: [{
     label: 'Logs',
     data: [9, 7 , 3, 5, 2, 10],
     backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)'
     ],
     borderColor: [
         'rgba(255,99,132,1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)'
     ],
     borderWidth: 1
 }]
},
options: {
 title: {
     text: 'Logs',
     display: true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero: true
         }
     }]
 }
}
});



  }

}
