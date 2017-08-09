/**
 * Created by idea on 20/03/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { ApiService } from './Api.service';
import { AccessToken } from '../models/AccessToken';
import { AccountService } from './Account.service'
import { User } from '../models/User';
import { FacebookLoginProvider } from '../providers/facebookLoginProvider';
import { GoogleLoginProvider } from '../providers/googleLoginProvider';
import { IAuthenticate } from '../contracts/Authenticate.contract';
import { UserToken } from '../models/UserToken';
import { environment } from '../../../environments/environment';

declare const PromiseWindow:any;
@Injectable()
export class AuthenticateService {
    public user:User;
    private facebook:IAuthenticate;
    private google:IAuthenticate;

    constructor(private http:ApiService, private accountService:AccountService) {
        this.facebook = new FacebookLoginProvider({
            appId: '1465397716834916',
            cookie: true,  // enable cookies to allow the server to access
                           // the session
            xfbml: true,  // parse social plugins on this page
            version: 'v2.8', // use graph api version 2.8
        }, {scope: 'email, public_profile'});
        this.google = new GoogleLoginProvider({
            client_id: '873655301603-2a03gvlji6n9m84e9qrm7ieg4jl0fvac.apps.googleusercontent.com',
            scope: 'profile',

        });
    }

    public load() {
        return this.accountService.get();
    }

    login(body:any) {
        let url = `/login`;
        let login : Observable<Response>;
        if (body.provider) {
            login = this.loginSocial(body.provider);
        } else {
            if (body.rememberMe === true) {
                body.ttl = 31556926;
            }
            login = this.http.post(url, body);
        }
        return login.map(
            (token:any) => {
                localStorage.removeItem('Access-Token');
                localStorage.setItem('Access-Token', token.id);
                localStorage.setItem('Token-Expire',token.ttl);
                this.http.setHeader('Access-Token', token.id);
                return token.user;
            }
        );

    }

    loginSocial(type:string) {
        let url = `/auth/` + type;
        let login = new Observable(observer=>{
            return this[type].login().then((data:UserToken)=> {
                return this.http.get(url, {code: data.access_token}).toPromise().then(data => observer.next(data));
            });
        });

        return login;

    }

    register(body:any) {
        let url = `/register`;
        return this.http.post(url, body).subscribe(
                data => {
                const {username,password} = body;
                return this.login({username, password});
            }
        );
    }

    logout() {
        localStorage.removeItem('Access-Token');
    }


}
