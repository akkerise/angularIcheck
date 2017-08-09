import { Component, Injector, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { TopService } from '../services/Top.service';
import { Product } from '../models/Product';
import * as fromUtility from '../services/Utility.service';
declare var $:any;
@Component({
    selector: 'products-box',
    templateUrl: './productsbox.component.html'
})

export class ProductsBoxComponent implements OnInit{
    data : any = [];
    page :number = 0;
    limit : number = 20;
    products = [];
    currentIndex : number = 0;
    maxPage : number = 6;
    private _redirectRoute :string = fromUtility.ROUTE_DETAIL;
    constructor(private injector: Injector,public router:Router,private topService : TopService) {


    }

    ngOnInit(){
        this.data = this.injector.get('data');
        this.getProducts(this.injector.get('data').query);
    }

    getProducts(query?:any){
        let self = this;
        this.topService.top(query).toPromise().then(
                data=>{
                self.products.push(fromUtility.UtilityService.convertData(data));
            }
        );
    }

    next(){
        if(this.currentIndex+1 < this.maxPage){
            this.currentIndex++;
            if(!this.products[this.currentIndex]){
            let that = this;
            that.page = this.page + 1;
            that.data.query.skip = this.data.query.limit * this.page;
            this.getProducts(this.data.query);
            }
        }
    }

    queryParam(){
        if(this.data.query.category_id){
            return {type: this.data.query.type, categoryId: this.data.query.category_id }
        }else{
            return {type:this.data.query.type, categoryId : null}
        }
    }

    previous(){
        if(this.currentIndex > 0){
            this.currentIndex-- ;
        }
    }
    OpenLink(route?:string,id?:string){
        var Link = fromUtility.UtilityService.route(route,id);
        return Link
    }
}