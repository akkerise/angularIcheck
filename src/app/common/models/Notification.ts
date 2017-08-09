/**
 * Created by idea on 20/04/2017.
 */
import { User } from './User'
export class Notification{
    public id : string;
    public message: string;
    public image : {
        type:string,
        link: string
    };
    public is_read : boolean;
    public since : number;
    public create_at : number;
    public source_id : number;
    public type : string;
    public action : string;
    public actors : User[];
    public actor_count: number;
    public target : {
        id : string,
        name : string,
        is_me : boolean,
        type : string
    };
    constructor(){}
}