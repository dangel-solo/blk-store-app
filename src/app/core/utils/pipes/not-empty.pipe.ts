import { Pipe, PipeTransform } from '@angular/core';
import { CustomUtils } from '../utils';

@Pipe({
  name: 'notempty',
})
export class NotEmptyPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    return CustomUtils.isNotEmpty(value);
  }
}
