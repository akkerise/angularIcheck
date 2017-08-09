/**
 * Created by idea on 20/03/2017.
 */
import { Injectable }     from '@angular/core';
@Injectable()
export class BreadcrumbService{
    router : Router[] = [];
    constructor(){
    }

    setData(data:Router[] = []){

    }

}
export class Router{
    constructor(
        public link : string,
        public name : string
    ){}
}