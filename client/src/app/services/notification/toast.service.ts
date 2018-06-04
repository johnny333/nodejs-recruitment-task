import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
declare let Materialize;
@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(private translateService: TranslateService) {
  }

  public showMessage = (messageKey: string) => {
    this.translateService.get(messageKey).subscribe(value => {
      Materialize.toast(value, 2500);
    })
  }
}
