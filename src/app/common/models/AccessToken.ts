/**
 * Created by idea on 20/03/2017.
 */
    import {User} from './User';
export class AccessToken{
    constructor(
        public id : string,
        public ttl : number,
        public user : User
    ){}
}