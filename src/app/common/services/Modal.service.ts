/**
 * Created by idea on 27/04/2017.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class ModalService {
    show: (text?:string,content?: any[], options?: Object) => Promise<string>;
}