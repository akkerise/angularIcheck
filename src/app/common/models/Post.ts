/**
 * Created by idea on 20/03/2017.
 */
import {Attachment} from './Attachment';
import {Link} from './Link';
export class Post {
    public id:number;
    public type:string;
    public content:string;
    public attachments:Attachment[];
    public gtin:string;
    public link:Link;
    public product_id:number|string;
    public post_id:number|string;
    constructor() {

    }
}