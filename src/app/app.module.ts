import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } 	from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { MomentModule } from 'angular2-moment';
import { ModalModule } from 'ngx-bootstrap';
import { FlashMessagesModule } from 'angular2-flash-messages/module';
import { EffectsModule } from '@ngrx/effects';
//routing here
import { AppRoutingModule } from './app.routes';

//component here
import { AppComponent } from './app.component';

import { reducer } from './common/reducers';
import { CategoryEffects } from './common/effects/category';
import { AuthEffects } from './common/effects/user';
import { FeedEffects } from './common/effects/feed';
import { PostEffects } from './common/effects/post';


// module here
import { LayoutModule } from './layout/layout.module';
import { HomeModule } from './home/home.module';
import { AuthenticateModule } from './login/authenticate.module';
import { NotFoundModule } from './notfound404/notfound.module';
import { ContactModule } from './contact/contact.module';
import { CategoriesModule } from './categories/categories.module';
import { ProductModule } from './product/product.module';
import { FollowModule } from './follow/follow.module';
import { TopProductModule } from './top_product/top-product.module';
import { UsersModule } from './users/users.module';
import { GroupModule } from './groups/groups.module';
import { NewsModule } from './news/news.module';
import { ProfileModule } from './profile/profile.module';
import { HelperModule } from './common/helper/helper.module';
//service here
import { ApiService } from './common/services/Api.service';
import { MiningApiService } from './common/services/MiningApi.service';
import { AuthenticateService } from './common/services/Authenticate.service';
import { AccountService } from './common/services/Account.service';
import { ProductService } from './common/services/Product.service';
import { TopService } from './common/services/Top.service';
import { AuthGuard } from './common/services/Auth.guard';
import { FeedService } from './common/services/Feed.service';
import { PostService } from './common/services/Post.service';
@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        RouterModule,
        ModalModule.forRoot(),
        FlashMessagesModule,
        FormsModule,
        HttpModule,
        AppRoutingModule,
        ReactiveFormsModule,
        CommonModule,
        MomentModule,
        StoreModule.provideStore(reducer),
        LayoutModule,
        HomeModule,
        ContactModule,
        FollowModule,
        UsersModule,
        AuthenticateModule,
        NotFoundModule,
        HelperModule,
        CategoriesModule,
        TopProductModule,
        ProductModule,
        NewsModule,
        GroupModule,
        ProfileModule,
        EffectsModule.run(CategoryEffects),
        EffectsModule.run(AuthEffects),
        EffectsModule.run(FeedEffects),
        EffectsModule.run(PostEffects)
    ],
    providers: [
        AuthenticateService,
        ApiService,
        AccountService,
        ProductService,
        TopService,
        MiningApiService,
        FeedService,
        PostService,
        AuthGuard
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
