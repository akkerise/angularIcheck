/**
 * Created by idea on 27/04/2017.
 */
import { Injectable }   from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormBase } from './form-base';

@Injectable()
export class ControlService {
    constructor() { }

    toFormGroup(questions: FormBase<any>[] ) {
        let group: any = {};

        questions.forEach(question => {
            group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                : new FormControl(question.value || '');
        });
        return new FormGroup(group);
    }
}