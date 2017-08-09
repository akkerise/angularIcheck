/**
 * Created by idea on 20/03/2017.
 */
export class User{
    constructor(
        public id : number,
        public icheck_id : string,
        public type : string,
        public social_name : string,
        public social_type : string,
        public follower_count : number,
        public following_count : number,
        public cover : string,
        public is_verify : boolean,
        public location_lat : number,
        public location_lgn : number,
        public rank_id : number,
        public is_shop : boolean,
        public is_virtual : boolean,
        public status : boolean,
        public avatar : string,
        public is_follow : boolean
    ){

    }
}