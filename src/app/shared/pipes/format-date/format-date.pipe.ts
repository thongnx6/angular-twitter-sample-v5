import { PipeTransform, Pipe } from '@angular/core';

/*
 * Raise the value with max langth character
 *   json from API: 6:02 AM - 18 May 2018
 *   InvalidPipeArgument for angular DatePipe
 *   Date format must be “Month Day Year”
 * Usage:
 *   value | format-date
*/
@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {
  transform(value: string): string {
    const displayValue = value.split(' - ')[1].split(' ');
    return `${displayValue[1]} ${displayValue[0]}, ${displayValue[2]}`;
  }
}
