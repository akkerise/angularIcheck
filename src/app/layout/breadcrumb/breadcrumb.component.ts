import { Component, Injector } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as fromRoot from '../../common/reducers';

@Component({
    selector: 'breadcrumb',
    templateUrl: './breadcrumb.template.html'
})

export class BreadcrumbComponent {
    data  : any;

    constructor(private store: Store<fromRoot.State>) {
       store.select('breadcrumb').subscribe(state=>{
           this.data = state;
       });
    }
}