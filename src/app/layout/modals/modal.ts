/**
 * Created by idea on 27/04/2017.
 */

import { ModalInterface } from './modal.interface';

export class Modal implements ModalInterface {
    static nextId = 0;

    id: number = (Modal.nextId++);
    content: any[] = [];
    text: string = 'default text';

    constructor(text?: string,content?:any[]) {
        this.content = content;
        this.text = text;
    }
}