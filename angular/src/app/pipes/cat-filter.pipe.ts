import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'catFilter'
})
@Injectable()
export class CatFilterPipe implements PipeTransform {
  transform(items: any[], field: string, value: string): any[] {
    if (!value) return items;
    if (!items) return [];
    return items.filter(it => it[field].toLowerCase().indexOf(value.toLowerCase()) > -1);
  }
}
