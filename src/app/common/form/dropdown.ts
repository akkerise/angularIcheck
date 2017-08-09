/**
 * Created by idea on 27/04/2017.
 */
import { FormBase } from './form-base';

export class Dropdown extends FormBase<string> {
    controlType = 'dropdown';
    options: {key: string, value: string}[] = [];

    constructor(options: {} = {}) {
        super(options);
        this.options = options['options'] || [];
    }
}