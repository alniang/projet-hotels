import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceComma',
})
export class ReplaceCommaPipe implements PipeTransform {
  transform(value: string | null): string {
    // !! =  ni undefined ni none en javascript
    if (!!value) {
      return value.replace(/,/g, '.');
    } else {
      return '';
    }
  }
}
