import { Component, OnInit } from '@angular/core';
import * as echarts from 'echarts';

@Component({
  selector: 'app-google-charts',
  templateUrl: './google-charts.component.html',
  styleUrls: ['./google-charts.component.scss']
})
export class GoogleChartsComponent implements OnInit {
  public angular: any;

  constructor() { }

  ngOnInit(): void {
    // tslint:disable-next-line:prefer-const
    const app = this.angular.module('graphsApp', ['angular-echarts']);

    // tslint:disable-next-line:only-arrow-functions typedef
    app.config(function(ngEchartConfigProvider){
      ngEchartConfigProvider.setOption('backgroundColor', '#FFF');
      ngEchartConfigProvider.setOption('title.x', 'center');
      ngEchartConfigProvider.setOption('legend.orient', 'vertical');
      ngEchartConfigProvider.setOption('legend.x', 'left');
      ngEchartConfigProvider.setOption('tooltip.formatter', '{a} <br/>{b} : {c} ({d}%)');
    });

    // tslint:disable-next-line:only-arrow-functions typedef
    app.controller('mainController', ['$scope', 'EchartThemes', function($scope, EchartThemes){
      $scope.charts = {};
      $scope.pie = {
        data: [
          {
            name: 'Aantal inwoners',
            type: 'pie',
            data: [
              {value: 335, name: 'Amsterdam'},
              {value: 310, name: 'Rotterdam'},
              {value: 234, name: 'Den Haag'},
              {value: 135, name: 'Utrecht'},
              {value: 1548, name: 'Eindhoven'}
            ]
          }
        ],
        options: {
          // tslint:disable-next-line:only-arrow-functions typedef
          onChartLoaded(chart){
            $scope.charts.pie = chart;
            // tslint:disable-next-line:only-arrow-functions typedef
            $scope.charts.pie.on('dataChanged', function(a){
              const options = $scope.charts.pie.getOption();
            });
          },
          calculable: true,
          title: {
            x : 'right'
          }
        }
      };

      $scope.rating = {
        data: [
          {
            type : 'pie',
            center : ['50%', '50%'],
            radius : ['50%', '70%'],
            data : [
              {name: 'other', value: 46, itemStyle : labelBottom},
              {name: 'GoogleMaps', value: 54, itemStyle : labelTop}
            ]
          }
        ],
        options: {
          legend : {
            show: false,
            data: []
          },
          tooltip : {
            show: false
          },
          title: {
            y : 'bottom'
          }
        }
      };

    }]);


    const labelTop = {
      normal : {
        label : {
          show : true,
          position : 'center',
          // tslint:disable-next-line:typedef
          formatter(params){
            return params.value + '%';
          },
          textStyle: {
            baseline : 'bottom',
            fontSize: 24
          }
        },
        labelLine : {
          show : false
        }
      }
    };
    const labelBottom = {
      normal : {
        color: '#ccc',
        label : {
          show : false,
          position : 'center',
          // tslint:disable-next-line:typedef
          formatter(params){
            return 100 - params.value + '%';
          },
          textStyle: {
            baseline : 'top'
          }
        },
        labelLine : {
          show : false
        }
      }
    };
  }

}
