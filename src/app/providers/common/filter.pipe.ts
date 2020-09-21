import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(Items: any, text: any): any {
    if (text === undefined) {

        return Items;
    }
    return Items.filter(function(e) {
        return e.name.toLowerCase().includes(text.toLowerCase())
    });
  }
}
