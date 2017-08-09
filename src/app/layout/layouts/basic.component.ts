import { Component } from '@angular/core';
import * as fromRoot  from '../../common/reducers';
import * as category from '../../common/actions/category';
import { Store } from '@ngrx/store';

declare var jQuery:any;

@Component({
    selector: 'basic',
    templateUrl: 'basic.template.html'
})
export class basicComponent {
    constructor(private store: Store<fromRoot.State>){
        this.store.dispatch(new category.LoadAction({limit:20,skip:0}));
    }

}