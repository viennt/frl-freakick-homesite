import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';

import { CONFIG } from '../constants';

@Injectable()
export class UploadService {

  private headers = new Headers({
    'enctype': 'multipart/form-data'
  });

  constructor(private http: Http) { }

  uploadImage(postData: any, files: File[]): Promise<any> {
    let formData: FormData = new FormData();
    formData.append('fileUpload', files[0], files[0].name);

    if (!!postData) {
      for (let property in postData) {
        if (postData.hasOwnProperty(property)) {
          formData.append(property, postData[property]);
        }
      }
    }
    return this.http.post(CONFIG.URL_UPLOAD, formData, {
      headers: this.headers
    }).toPromise();
  }
}
