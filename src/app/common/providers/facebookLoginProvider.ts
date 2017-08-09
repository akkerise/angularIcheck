/**
 * Created by idea on 24/03/2017.
 */
import { IAuthenticate } from '../contracts/Authenticate.contract';
import { FacebookInitParams } from '../contracts/FacebookInitParams';
import { UserToken } from '../models/UserToken';
import { AuthenticateService } from '../services/Authenticate.service';

declare const FB:any;
export class FacebookLoginProvider implements IAuthenticate{
    private message : string;
    private options : FacebookLoginOptions;
    private authenService : AuthenticateService
    constructor(params : FacebookInitParams,options : FacebookLoginOptions){
        FB.init(params);
        this.options  = options;
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
                    FB.login((response: FacebookLoginResponse) => {
                        if(response.authResponse) {
                            var uFacebook = new UserToken();
                            uFacebook.access_token = response.authResponse.accessToken;
                            uFacebook.social_type = 'facebook';// 1: facebook
                            resolve(uFacebook);
                        }else{
                            reject();
                        }
                    }, this.options);
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
        FB.logout(function (response) {
            // user is now logged out
        this.authenService.logout();
        });
    }

    register() {
        this.login();
    }
}


export interface FacebookLoginOptions {
    /**
     * Optional key, only supports one value: rerequest. Use this when re-requesting a declined permission.
     */
    auth_type?: string;
    /**
     * Comma separated list of extended permissions
     */
    scope?: string;
    /**
     * When true, the granted scopes will be returned in a comma-separated list.
     */
    return_scopes?: boolean;
    /**
     * When true, prompt the user to grant permission for one or more Pages.
     */
    enable_profile_selector?: boolean;
    /**
     * Comma separated list of IDs to display in the profile selector
     */
    profile_selector_ids?: string;
}
export interface FacebookLoginResponse {
    authResponse: FacebookAuthResponse;
    status: string;
}

export interface FacebookAuthResponse {
    /**
     * User access token
     */
    accessToken: string;
    /**
     * Access token lifetime in seconds
     */
    expiresIn: number;
    /**
     *
     */
    signedRequest: string;
    /**
     * The Facebook user ID
     */
    userID: string;
    /**
     * The granted scopes. This field is only available if you set `return_scopes` to true when calling login method.
     */
    grantedScopes?: string;
}

