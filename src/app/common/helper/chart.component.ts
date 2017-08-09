/**
 * Created by idea on 27/03/2017.
 */
import { Component, Input, OnInit  } from '@angular/core';
import { Http, Response, Headers, RequestOptions,URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import * as fromUtility from '../services/Utility.service';
import { Product } from '../models/Product';
declare const google: any;

@Component({
    selector: 'ick-chart',
    template: `<div id="pie_chart" style="width: 100%; height: 200px;"></div>`
})

export class ChartComponent implements OnInit{

    private _product : Product;

    @Input()
        set product(value : Product){
        this._product = value;
        google.charts.load("current", {packages:["corechart"]});
        google.charts.setOnLoadCallback(drawChart);
        function drawChart() {
            var vote_good_count = value.vote_good_count;
            var vote_normal_count = value.vote_normal_count;
            var vote_bad_count = value.vote_bad_count;
            if(vote_good_count === vote_normal_count && vote_normal_count === vote_bad_count && vote_bad_count == 0){
                vote_bad_count = 1;
                vote_good_count = 1;
                vote_normal_count = 1
            }
            var data = google.visualization.arrayToDataTable([
                ['Task', 'Hours per Day'],
                ['Nên dùng',     vote_good_count],
                ['Cũng được',    vote_normal_count],
                ['Tránh xa',     vote_bad_count],
            ]);

            var options = {
                colors: ['#0eb389', '#f3b562', '#e84c3d']
            };

            var chart = new google.visualization.PieChart(document.getElementById('pie_chart'));

            chart.draw(data, options);
        }
    }
    get product(){
        return this._product;
    }

    constructor() {

    }

    ngOnInit():void {

    }


    OpenLink(route?:string,id?:string){
        var Link = fromUtility.UtilityService.route(route,id);
        return Link;
    }
}