/**
 * Created by idea on 20/03/2017.
 */
    import { Owner } from './Owner'
export class Group{
    constructor(
        public id : number,
        public name : string,
        public icon : string,
        public cover : string,
        public user_count : number,
        public owner : Owner,
        public type_id : number,
        public members : string,
        public is_member: boolean
    ){

    }
}