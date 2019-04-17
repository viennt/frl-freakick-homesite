import { Injectable } from '@angular/core';

@Injectable()
export class StorageService {

  constructor() {
    //
  }

  set(key: any, value: any) {
    localStorage.setItem(key, value);
  }

  get(key: any) {
    return localStorage.getItem(key);
  }

  remove(key: any) {
    localStorage.removeItem(key);
  }

}
