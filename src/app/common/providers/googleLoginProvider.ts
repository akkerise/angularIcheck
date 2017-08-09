/**
 * Created by idea on 24/03/2017.
 */
import { IAuthenticate } from '../contracts/Authenticate.contract';
import { GoogleInitParams } from '../contracts/GoogleInitParams';
import { UserToken } from '../models/UserToken';
import { AuthenticateService } from '../services/Authenticate.service';

declare const gapi: any;
export class GoogleLoginProvider implements IAuthenticate{
    public auth2: any;
    private message : string;
    private authenService : AuthenticateService;
    constructor(params : GoogleInitParams){
        console.log('vao');
        if(typeof gapi !== "undefined"){
            gapi.load('client:auth2',function(){
                gapi.client.init(params);

            });
        }
    }


    /**
     * Login the user
     * @param options
     * @returns {Promise<FacebookLoginResponse>}
     */
    login(): Promise<UserToken> {
        return new Promise<UserToken>(
            (resolve, reject) => {
                try {
                    gapi.auth2.getAuthInstance().signIn().then(function(data){
                        var uGoogle = new UserToken();
                        uGoogle.access_token = data.Zi.access_token;
                        uGoogle.social_type = 'google';// 2: google
                        resolve(uGoogle);
                    });
                } catch (err) {
                    reject(err);
                }
            }
        );
    }

    onMessage(){
        return this.message;
    }

    logout() {
        gapi.auth2.getAuthInstance().signOut();
        this.authenService.logout();
    }

    register() {
        this.login();
    }
}


export interface GoogleAuthResponse {

    Zi:{
    access_token: string;
    expires_at?: number;
    expires_in?:number;
    first_issued_at?:number;
    id_token: string;
    idpId?:string;
    login_hint?:string;
    scope?:string;
    session_state?: {};
    token_type:string;
    }
}