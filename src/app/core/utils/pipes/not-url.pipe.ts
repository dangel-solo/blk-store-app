import { Pipe, PipeTransform } from '@angular/core';
import { CustomUtils } from '../utils';

@Pipe({
  name: 'noturl',
})
export class NotUrlPipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    return CustomUtils.validUrl(value);
  }
}
