/**
 * Created by idea on 14/04/2017.
 */
import { Injectable }     from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';

declare var $: any;

@Injectable()
export class UploadService {
    private header:Headers;
    responseData: any;
    handleError: any;
    constructor(private http:Http) {
        let contentHeaders = new Headers();
        this.header = contentHeaders;
        this.header.set("Authorization", "Basic aWNoZWNrOmlZQUYmO2NCZSNHM2F+RDojaGVjaw==");
        if (localStorage.getItem('Access-Token')) {
            this.header.set('token', localStorage.getItem('Access-Token'));
        }

    }
    upload(files:File[],responseType?:string,postData?:any){
        if(responseType =="" || responseType == undefined || responseType ==null){
            responseType = 'json';
        }
        let url = `http://upload.icheck.vn/v1/images?uploadType=multipart&responseType=${responseType}`;
        return this.postWithFile(url,files,postData);
    }

    private postWithFile (url: string,files: File[], postData?: any) {

        let formData:FormData = new FormData();
        //formData.append('files', files[0], files[0].name);
        // For multiple files
         for (let i = 0; i < files.length; i++) {
             formData.append(`files[]`, files[i], files[i].name);
         }

        if(postData !=="" && postData !== undefined && postData !==null){
            for (var property in postData) {
                if (postData.hasOwnProperty(property)) {
                    formData.append(property, postData[property]);
                }
            }
        }
        var returnReponse = new Promise((resolve, reject) => {
            this.http.post(url, formData, {
                headers: this.header
            }).subscribe(
                    res => {
                    this.responseData = res.json();
                    resolve(this.responseData);
                },
                    error => {
                    reject(error);
                }
            );
        });
        return returnReponse;
    }

}