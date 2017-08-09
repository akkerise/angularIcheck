/**
 * Created by idea on 21/03/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../common/reducers';
import { Category } from '../../common/models/Category';
import * as fromUtility from '../../common/services/Utility.service';
@Component({
    selector: 'left-menu',
    templateUrl: './left-menu.component.html'
})

export class LeftMenuComponent{
    categories:Observable<Category[]>;
    constructor(private store: Store<fromRoot.State>,private router:Router){
        this.categories = this.store.select(fromRoot.getAllCategories);
    }
    OpenLink(route?:string,id?:string){
        var Link = fromUtility.UtilityService.route(route,id);
        return Link;
    }
}