/**
 * Created by idea on 20/03/2017.
 */
    import {Attachment} from "./Attachment";
    import {Vendor} from "./Vendor";
export class Product {
    constructor(
        public id : number,
        public product_name : string,
        public price_default : string,
        public image_default : string,
        public attachments : Attachment[],
        public features : string[],
        public view_count : number,
        public scan_count : number,
        public comment_count : number,
        public share_count : number,
        public vote_good_count : number,
        public vote_bad_count : number,
        public vote_normal_count : number,
        public review_count : number,
        public seller_count : number,
        public vendor : Vendor
    ){

    }
}