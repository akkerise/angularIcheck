import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {basicComponent} from './layout/layouts/basic.component';
import {blankComponent} from './layout/layouts/blank.component';
import {nomenuComponent} from './layout/layouts/nomenu.component';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {AuthenticateComponent} from './login/authenticate.component';
import {CategoriesComponent} from './categories/categories.component';
import {BrowserComponent} from './categories/browser.component';
import {NotFoundComponent} from './notfound404/notfound.component';
import {ProductComponent} from './product/product.component';
import {FollowComponent} from './follow/follow.component';
import {DetailFeedComponent} from './follow/detail.component';
import {TopProductComponent} from './top_product/top-product.component';
import {UsersComponent} from './users/users.component';
import {GroupsComponent} from './groups/groups.component';
import {NewsListComponent} from './news/news-list.component';
import {NewsDetailComponent} from './news/news-detail.component';
import {ProfileComponent} from './profile/profile.component';
import {AuthGuard} from './common/services/Auth.guard';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {path: '', redirectTo: 'home', pathMatch: 'full'},
      {
        path: '', component: basicComponent,
        children: [
          {path: 'home', component: HomeComponent},
          {path: 'contact', component: ContactComponent, canActivate: [AuthGuard]},
          {path: 'login', component: AuthenticateComponent},
          {path: 'categories', component: CategoriesComponent},
          {path: 'categories/:id', component: BrowserComponent},
          {path: 'product/detail/:id', component: ProductComponent},
          {path: 'follow', component: FollowComponent},
          {path: 'post/:id', component: DetailFeedComponent},
          {path: 'top/products', component: TopProductComponent},
          {path: 'top/users', component: UsersComponent},
          {path: 'top/groups', component: GroupsComponent},
          {path: 'news', component: NewsListComponent},
          {path: 'news/:id', component: NewsDetailComponent},
          {path: 'profile/:id', component: ProfileComponent}
        ]
      },
      {
        path: '', component: nomenuComponent,
        children: [
          {path: '**', component: NotFoundComponent},
        ]
      }
    ])
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

