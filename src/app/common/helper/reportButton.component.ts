/**
 * Created by idea on 24/04/2017.
 */

import { Component, Input,ViewChild  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { PostService } from '../services/Post.service';
import { ModalService } from '../services/Modal.service';
import { ModalInfoService } from '../services/ModalInfo.service';
import { Dropdown } from '../form/dropdown';
import { FormBase }     from '../form/form-base';
import { Textbox }  from '../form/textbox';
import { Textarea }  from '../form/textarea';
import { RadioBox }  from '../form/radio-box';

@Component({
    selector: 'ick-report',
    template: `<a href="javascript:" (click)="open()" class="{{class}}" [innerHtml]="html"></a>`
})
export class ReportButtonComponent {

    @Input()
        html:string;
    //size : small,medium,thumb_medium,thumb_medium,thumb_small,original
    @Input()
        objectId:string;

    @Input()
        class:string = 'ic-icon-report';

    @Input()
        type : string = 'post';

    public model:any = {};
    public alerts:any = [];
    public reportTypes:any[];

    constructor(private postService:PostService, private _modalService:ModalService, private _modalInfoService:ModalInfoService) {
    }


    open() {
        let formComponent = [];
            this.postService.getReportType(this.type).toPromise().then(data=> {
                let formRadio = new RadioBox({
                    key: 'type_id',
                    label: 'Báo cáo',
                    options: [],
                    required: true,
                    order: 1
                });
                if(this.type=='product'){
                    formRadio = new RadioBox({
                        key: 'report_type_id',
                        label: 'Báo cáo',
                        options: [],
                        required: true,
                        order: 1
                    });
                }
                data.forEach(type=> {
                    formRadio.options.push({key: type.id, value: type.name})
                });
                formComponent.push(formRadio);
                formComponent.push(new Textarea({
                    key: 'note',
                    label: 'Note',
                    value: '',
                    order: 2
                }));
                formComponent.push(new Textbox({
                    key: 'object_id',
                    label: '',
                    type: 'hidden',
                    value: this.objectId,
                    order: 3
                }));
            });
            this._modalService.show('Báo cáo nội dung', formComponent).then(data=> {
                this.postService.reportPost(this.objectId, JSON.parse(data),this.type).toPromise().then(data=> {
                    this._modalInfoService.show('Cảm ơn bạn đã góp ý!', {cssClass: 'alert-success', timeout: 3000});
                }).catch(error => {
                    this._modalInfoService.show('Báo cáo thất bại! Vui lòng thử lại sau', {
                        cssClass: 'alert-success',
                        timeout: 10000
                    });
                });
            }).catch(error=>{
                console.log(error);
            });


    }
}