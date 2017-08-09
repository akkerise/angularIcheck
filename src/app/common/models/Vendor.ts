/**
 * Created by idea on 20/03/2017.
 */
    import {Country} from "./Country"
export class Vendor {
    constructor(
        public id : number,
        public name : string,
        public email : string,
        public phone : string,
        public address : string,
        public website : string,
        public contry : Country
    ){}
}