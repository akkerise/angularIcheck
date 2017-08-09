/**
 * Created by idea on 24/03/2017.
 */
export class UserFacebookToken{
    public id : string;
    public access_token : string;
    public name : string;
    public first_name : string;
    public last_name : string;
    public age_range : {min:number,max:number};
    public link : string;
    public gender : string;
    public locale : string;
    public picture : {data:{is_silhouette:boolean,url:string}};
    public timezone : number;
    public updated_time : string;
    public verified : boolean;
    constructor(
    ){
    }

}/**
 * Created by idea on 24/03/2017.
 */
