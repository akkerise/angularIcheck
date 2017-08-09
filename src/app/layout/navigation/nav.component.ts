/**
 * Created by idea on 21/03/2017.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { AuthenticateService } from 'app/common/services/Authenticate.service';
import { FlashMessagesService } from 'angular2-flash-messages/module';
import * as fromRoot from 'app/common/reducers';
import * as actionAuth from 'app/common/actions/authentication';
import * as fromUtility from 'app/common/services/Utility.service';
import { PostService } from '../../common/services/Post.service';
import { Store } from '@ngrx/store';
import { Category } from 'app/common/models/Category';
import { Observable } from 'rxjs/Observable';

@Component({
    selector: 'navigation',
    templateUrl: './nav.component.html'
})

export class NavComponent {
    public currentUser = null;
    public textAuthenticate = 'Đăng nhập';
    categories:Observable<Category[]>;
    count : any = {};
    constructor(private router : Router,private _flashMessagesService: FlashMessagesService,private store : Store<fromRoot.State>,private postService : PostService){
        this.store.select(fromRoot.getUser).subscribe(data => {
            this.currentUser = data;
        });
        this.categories = this.store.select(fromRoot.getAllCategories);
        this.postService.countPost().toPromise().then(data=>{
            this.count = data;
        });
    }

    navAuthen(){
        if(!this.currentUser){
            this.router.navigate(['/login']);
        }else{
            this.store.dispatch(new actionAuth.LogoutAction());
            this._flashMessagesService.show('Logout Success!', { cssClass: 'alert-success', timeout: 10000});
            this.router.navigate(['/login']);
        }
    }
    OpenLink(route?:string,id?:string){
        var Link = fromUtility.UtilityService.route(route,id);
        return Link;
    }
}