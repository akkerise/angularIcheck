/**
 * Created by idea on 27/04/2017.
 */
import { FormBase } from './form-base';

export class Textarea extends FormBase<string> {
    controlType = 'textarea';
    type: string;

    constructor(options: {} = {}) {
        super(options);
        this.type = options['type'] || '';
    }
}