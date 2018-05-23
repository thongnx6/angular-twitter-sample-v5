import { PipeTransform, Pipe } from '@angular/core';

/*
 * Raise the value with max langth character
 * Usage:
 *   value | displayMaxLength:maxLength
*/
@Pipe({
  name: 'displayMaxLength'
})
export class DisplayMaxLengthPipe implements PipeTransform {
  transform(value: string, maxLength: number): string {
    let displayValue = value;
    if (displayValue && displayValue.length > 30) {
      displayValue = `${displayValue.substring(0, 30)}...`;
    }
    return displayValue;
  }
}
