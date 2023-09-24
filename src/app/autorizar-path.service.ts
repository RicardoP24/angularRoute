import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutorizarPathService {

  constructor() { }
  private _a: boolean = false;
  get a(): boolean {
  return this._a;
  }
  set a(value: boolean) {
  this._a = value;
  }
  
  autorizar(){
    return this.a;
  }
}
