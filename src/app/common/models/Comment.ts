/**
 * Created by idea on 20/03/2017.
 */
    import {Owner} from './Owner';
    import {Attachment} from './Attachment';
export class Comment{
    constructor(
        public id : string,
        public parent : string,
        public object_id : string | number,
        public owner : Owner,
        public content : string,
        public attachments : Attachment[],
        public child_count : number,
        public like_count : number,
        public vote_type : number,
        public service : string,
        public is_like : boolean,
        public replices : Comment[]
    ){

    }
}