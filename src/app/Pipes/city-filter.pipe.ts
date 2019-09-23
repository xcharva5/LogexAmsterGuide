import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cityFilter'
})
export class CityFilterPipe implements PipeTransform {
  transform(items: any, filter: any, filterItems: Array<any>, isAnd: boolean): any {
    console.log('Filtering ..');
    if (filter && Array.isArray(items) && filterItems) {
      let filterKeys = Object.keys(filter);
      let checkedItems = filterItems.filter(item => { return item.checked; });
      if (!checkedItems || checkedItems.length === 0) { return items; }
      if (isAnd) {
        return items.filter(item =>
            filterKeys.reduce((acc1, keyName) =>
                (acc1 && checkedItems.reduce((acc2, checkedItem) => acc2 && new RegExp(item[keyName], 'gi').test(checkedItem.value) || checkedItem.value === "", true))
              , true)
              );
      } else {
        console.log(items);
        console.log(filterKeys);
        console.log(checkedItems);
        return items.filter(item => {
          return filterKeys.some((keyName) => {
            return checkedItems.some((checkedItem) => {
              return new RegExp(item.location.city).test(checkedItem.name) || checkedItem.value === "";
            });
          });
        });
      }
    } else {
      return items;
    }
  }
}
