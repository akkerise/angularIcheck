/**
 * Created by idea on 20/03/2017.
 */
export class Collection{
    constructor(
        public id : number,
        public icheck_id : string,
        public name : string,
        public item_count : number,
        public thumbs : string[],
        public description : string,
        public createdAt : number,
        public updatedAt : number
    ){

    }
}