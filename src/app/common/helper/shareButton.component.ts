/**
 * Created by idea on 24/04/2017.
 */

import { Component, Input,ViewChild  } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { PostService } from '../services/Post.service';
import { ModalService } from '../services/Modal.service';
import { ModalInfoService } from '../services/ModalInfo.service';
import { Post } from '../models/Post';
import { Textbox }  from '../form/textbox';
import { Textarea }  from '../form/textarea';
import { RadioBox }  from '../form/radio-box';

@Component({
    selector: 'ick-share',
    template: `<a href="javascript:" (click)="open()" [class]="class" [innerHtml]="html"></a>

            <div class="modal fade" bsModal #staticModal="bs-modal" [config]="{backdrop: 'static'}"
                 tabindex="-1" role="dialog" aria-labelledby="share" aria-hidden="true">
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title pull-left">Chia sẻ nội dung</h4>
                            <button type="button" class="close pull-right" aria-label="Close"
                                    (click)="staticModal.hide()">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <form (ngSubmit)="onSubmit()" #shareForm="ngForm">
                                <p>
                                    <label class="radio-inline">Note:
                                        <textarea [(ngModel)]="model.content" name="content"></textarea>
                                    </label>
                                </p><br>
                                <button type="submit">Submit</button>
                                <button type="button" (click)="staticModal.hide()">Cancel</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
    `
})
export class ShareButtonComponent{
    @ViewChild('smModal') public smModal:ModalDirective;
    @ViewChild('staticModal') public staticModal:ModalDirective;

    @Input()
        html : string;

    @Input()
        objectId: string;

    @Input()
        type: string = 'post';

    @Input()
        class : string = 'ic-share-icheck';



    public model:any = {};
    public alerts: any = [];
    public reportTypes : any[];

    constructor( private postService:PostService,private _modalService:ModalService, private _modalInfoService:ModalInfoService){
    }


    onSubmit(){
        if(!this.objectId){
            this.alerts.push({
                type: 'fail',
                msg: `Chia sẻ thất bại.`,
                timeout: 5000
            });
        }else{
            if(this.type == 'post'){
                this.model.post_id = this.objectId;
            }
            else if(this.type == 'product'){
                this.model.product_id = this.objectId;
            }else{
                this.model.post_id = this.objectId;
            }
            this.postService.sharePost(this.model).toPromise().then(data=>{
                this.alerts.push({
                    type: 'success',
                    msg: `Chia sẻ thành công.`,
                    timeout: 5000
                });
            }).catch(error =>{
                this.alerts.push({
                    type: 'fail',
                    msg : `Chia sẻ thất bại. Vui lòng chia sẻ sau.`,
                    timeout: 5000
                })
            });
        }
        this.smModal.show();
        this.staticModal.hide();
    }

    open(){
        let formComponent = [];
        formComponent.push(new Textarea({
            key: 'content',
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
        this._modalService.show('Chia sẻ', formComponent).then(data=> {
            let result = JSON.parse(data);
            if(this.type == 'post'){
                this.model.post_id = this.objectId;
            }
            else if(this.type == 'product'){
                this.model.product_id = this.objectId;
            }else{
                this.model.post_id = this.objectId;
            }
            this.model.content = result.content;
            this.postService.sharePost(this.model).toPromise().then(data=>{
                this._modalInfoService.show('Chia sẻ thành công!', {cssClass: 'alert-success', timeout: 3000});
            }).catch(error =>{
                this._modalInfoService.show('Chia sẻ thất bại!', {cssClass: 'alert-success', timeout: 3000});
            });
        });


    }
}