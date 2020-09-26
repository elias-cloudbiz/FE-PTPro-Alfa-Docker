import { Pipe, PipeTransform } from '@angular/core';
import { I18nService } from '../services/i18n.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {
  constructor(private translate: I18nService) {}
  transform(key: any, args?:string): any {

    if(args != null) {
        return this.translate.data[key] || key;
    }
    else
      return this.translate.data[key] || key;

  }
}
