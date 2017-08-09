/**
 * Created by idea on 20/03/2017.
 */
import {Attachment} from './Attachment';
export class ContributeIdentity{
    constructor(
        public id : number,
        public attachments : Attachment[],
        public content : string,
        public icheck_id : string
    ){

    }
}