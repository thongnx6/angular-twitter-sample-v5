import { PipeTransform, Pipe } from '@angular/core';

/*
 * Paging smart table without Api fetch
 * Usage:
 *   values | pagingSmart: page
*/
@Pipe({
  name: 'pagingSmart'
})
export class PagingSmartPipe implements PipeTransform {
  transform(values: Array<any>, page: number): Array<any> {
    // because pages logically start with 1
    if (values) {
      return values.slice((page - 1) * 10, page * 10);
    }
    return [];
  }
}
