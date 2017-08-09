/**
 * Created by idea on 27/04/2017.
 */
import { FormBase } from './form-base';

export class Textbox extends FormBase<string> {
    controlType = 'textbox';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}