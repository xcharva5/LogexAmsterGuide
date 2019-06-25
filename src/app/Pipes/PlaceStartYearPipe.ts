import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'placeStartYear' })

export class PlaceStartYearPipe implements PipeTransform {

  transform(date: string): string {
    return date.slice(6,10);
  }
}

export interface PipeTransform {
  transform(value: any, ...args: any[]): any;
}
