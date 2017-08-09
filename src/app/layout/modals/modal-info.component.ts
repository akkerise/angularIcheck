/**
 * Created by idea on 21/03/2017.
 */
import { Component, OnInit, ChangeDetectorRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import * as fromUtility from '../../common/services/Utility.service';
import { ModalInfoService } from '../../common/services/ModalInfo.service';
import { ModalInfo } from './modal-info';
import { ModalInfoInterface } from './modal-info.interface';
import { ModalDirective } from 'ngx-bootstrap/modal';

@Component({
    selector: 'sd-modal-info',
    templateUrl: './modal-info.component.html'
})

export class ModalInfoComponent{
    @ViewChild('smModal') public smModal:ModalDirective;
    messages: ModalInfoInterface[] = [];

    constructor(private _cdRef: ChangeDetectorRef,private _modalService: ModalInfoService){
        this._modalService.show = this.show.bind(this);
    }

    OpenLink(route?:string,id?:string){
        var Link = fromUtility.UtilityService.route(route,id);
        return Link;
    }

    show(text?: string, options = {}): void {
        this.smModal.show();
        let defaults = {
            timeout: 2500,
            cssClass: ''
        };

        for (var attrname in options) { (<any>defaults)[attrname] = (<any>options)[attrname]; }

        let message = new ModalInfo(text);
        this.messages.push(message);
        this._cdRef.detectChanges();

        window.setTimeout(() => {
            this.smModal.hide();
            this.messages = [];
            this._cdRef.detectChanges();
        }, defaults.timeout);
    }
}