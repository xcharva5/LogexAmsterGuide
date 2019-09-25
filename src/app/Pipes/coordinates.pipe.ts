import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'coordinates'
})
export class CoordinatesPipe implements PipeTransform {

  transform(coordinate: string): number {
    return parseFloat(coordinate.replace(',', '.'));
  }

}
