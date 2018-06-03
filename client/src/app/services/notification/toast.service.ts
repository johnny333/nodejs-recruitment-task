import { Injectable } from '@angular/core';
declare let Materialize;
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }
  public showMessage =(message:string) =>{
    Materialize.toast(message, 2500);
  }
}
