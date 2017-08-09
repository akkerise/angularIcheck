/**
 * Created by idea on 27/04/2017.
 */

import { ModalInfoInterface } from './modal-info.interface';

export class ModalInfo implements ModalInfoInterface {
    static nextId = 0;

    id: number = (ModalInfo.nextId++);
    text: string = 'default text';

    constructor(text?: string) {
        this.text = text;
    }
}