import { Pipe, PipeTransform } from '@angular/core';
import { CustomUtils } from '../utils';

@Pipe({
  name: 'notimage',
})
export class NotImagePipe implements PipeTransform {
  transform(value: string | null | undefined): string {
    return CustomUtils.isNotImage(value);
  }
}
