import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'timesFilter'
})
export class TimesFilterPipe implements PipeTransform {
  transform(value: number): any {
    const iterable = {};
    iterable[Symbol.iterator] = function*() {
      let n = 0;
      while (n < value) {
        yield ++n;
      }
    };
    return iterable;
  }
}
