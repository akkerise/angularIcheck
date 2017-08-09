/**
 * Created by idea on 20/03/2017.
 */
export class CollectionItem{
    constructor(
        public id : number,
        public collection_id : number,
        public object_type : string,
        public object_id : string,
        public createdAt : number,
        public updatedAt : number
    ){

    }
}