/**
 * Created by idea on 20/03/2017.
 */
export class News{
    constructor(
        public id : number,
        public title : string,
        public thumb : string,
        public description : string,
        public content : string,
        public source : string,
        public createdAt : number,
        public updatedAt : number
    ){
    }
}