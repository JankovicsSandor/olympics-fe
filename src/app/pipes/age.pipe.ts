import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any): string {
    if (value) {
      let today = Date.now();
      var month_diff = today - new Date(value).getTime();
      var age_dt = new Date(month_diff);
      var year = age_dt.getUTCFullYear();
      var age = Math.abs(year - 1970);

      return age + "";
    }

    return "N/A"
  }

}
