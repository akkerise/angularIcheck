/**
 * Created by idea on 21/03/2017.
 */
import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import * as fromUtility from '../../common/services/Utility.service';
import { ModalService } from '../../common/services/Modal.service';
import { Modal } from './modal';
import { ModalInterface } from './modal.interface';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Dropdown } from '../../common/form/dropdown';
import { FormBase }     from '../../common/form/form-base';
import { Textbox }  from '../../common/form/textbox';
import { RadioBox }  from '../../common/form/radio-box';

@Component({
    selector: 'sd-modal',
    templateUrl: './modal.component.html'
})

export class ModalComponent{
    @ViewChild('staticModal') public staticModal:ModalDirective;
    content: ModalInterface;
    questions: any[] = [];
    promise : Promise<string>;
    callBack : any;

    constructor(private _cdRef: ChangeDetectorRef,private _modalService: ModalService){
        this._modalService.show = this.show.bind(this);

    }

    OpenLink(route?:string,id?:string){
        var Link = fromUtility.UtilityService.route(route,id);
        return Link;
    }

    createPromise(){
        var cb;
        var promise = new Promise(function(resolve, reject) {
            cb = function(err, data) {
                if (err) return reject(err);
                return resolve(data);
            };
        });

        return promise;
    }

    show(text?: string,content?:any[], options = {}): Promise<string> {
        return new Promise((resolve, reject) => {
            this.staticModal.show();
            let defaults = {
                timeout: '',
                cssClass: ''
            };

            for (var attrname in options) { (<any>defaults)[attrname] = (<any>options)[attrname]; }

            let message = new Modal(text,content);
            this.content = message;
            this.questions = content;
            this._cdRef.detectChanges();
            if(defaults.timeout){
                window.setTimeout(() => {
                    this.questions = [];
                    this.staticModal.hide();
                    this._cdRef.detectChanges();
                }, defaults.timeout);
            }
            this.callBack = function(err, data?:any) {
                this.close();
                if (err){
                    return reject(err);
                }
                return resolve(data);
            };
        });
    }

    close(){
        this.staticModal.hide();
        this.questions = [];
    }

    onResult(s:string){
        this.callBack(null,s);
    }

    onError(error:string){
        this.callBack(error,null);
    }
}