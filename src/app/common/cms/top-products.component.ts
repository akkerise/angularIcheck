/**
 * Created by idea on 17/04/2017.
 */
import { Component, Injector } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { ProductService } from '../services/Product.service';
import { Product } from '../models/Product';
import * as fromUtility from '../services/Utility.service';

@Component({
    selector: 'top-products',
    templateUrl: './top-products.template.html'
})

export class TopProductsComponent {
    data : any = null;
    products : Product[] = [];
    listGroup : any[];
    currentGroup : any;

    constructor(private injector: Injector,public router:Router,private productService : ProductService) {
        this.data = this.injector.get('data');
        this.productService.getProductGroup({limit:8,skip:0}).toPromise().then(data=>{
            this.listGroup = data;
            this.setCurrent(data[0]);
        });

    }

    setCurrent(group:any){
        this.currentGroup = group;
        this.loadProducts(group.id,true);
    }

    loadProducts(id:number,addNew:boolean = false){
        this.productService.getProductByGroup(id,this.data.query).toPromise().then(
                data=>{
                    if(addNew){
                        this.products = (data);
                    }else{
                        data.forEach(product => {
                            this.products.push(product);
                        })
                    }
            }
        );
    }
    OpenLink(route?:string,id?:string){
        var Link = fromUtility.UtilityService.route(route,id);
        return Link;
    }
}