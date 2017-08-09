/**
 * Created by idea on 27/04/2017.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class ModalInfoService {
    show: (text?: string, options?: Object) => void;
}