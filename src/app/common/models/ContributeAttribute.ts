/**
 * Created by idea on 20/03/2017.
 */
import {Attribute} from './Attribute';
export class ContributeAttribute{
    constructor(
        public id : number,
        public attributes : Attribute[],
        public icheck_id : string
    ){

    }
}