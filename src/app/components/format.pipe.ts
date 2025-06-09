import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'format',
  standalone: false
})
export class FormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
