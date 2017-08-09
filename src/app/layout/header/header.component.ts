/**
 * Created by idea on 21/03/2017.
 */
import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {FlashMessagesService} from 'angular2-flash-messages/module';
import * as fromRoot from 'app/common/reducers';
import * as actionAuth from 'app/common/actions/authentication';
import {Store} from '@ngrx/store';
import * as fromUtility from 'app/common/services/Utility.service';
import {UserService} from 'app/common/services/User.service';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit {

  public currentUser = null;
  count: { all: number, user_activity: number, group_activity: number, user_score_activity: number };

  constructor(private router: Router,
              private _flashMessagesService: FlashMessagesService,
              private store: Store<fromRoot.State>,
              private userService: UserService) {
  }

  ngOnInit() {
    this.store.select(fromRoot.getUser).subscribe(data => {
      this.currentUser = data;
    });
    this.userService.getCountNotification().toPromise().then(data => {
      this.count = data;
    })
  }

  navAuthen() {
    if (!this.currentUser) {
      this.router.navigate(['/login']);
    } else {
      this.store.dispatch(new actionAuth.LogoutAction());
      this._flashMessagesService.show('Logout Success!', {cssClass: 'alert-success', timeout: 10000});
      this.router.navigate(['/login']);
    }
  }

  authenticate(provider: string) {
    this.store.dispatch(new actionAuth.LoginAction({provider: provider}))
  }


  OpenLink(route?: string, id?: string) {
    var Link = fromUtility.UtilityService.route(route, id);
    return Link;
  }
}
