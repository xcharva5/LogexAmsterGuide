import { Pipe, PipeTransform } from '@angular/core';
import { Place } from 'src/app/Structures/place';

@Pipe({
  name: 'substringFilter'
})
export class SubstringFilterPipe implements PipeTransform {

  transform(places: Place[], titleSearchTerm: string, zipSearchTerm: string, yearSearchTerm: string): Place[] {
    if (places && places.length) {
      return places.filter(place => {

        if (zipSearchTerm
          && (!place.location.zipcode || place.location.zipcode.toLowerCase().indexOf(zipSearchTerm.toLowerCase()) === -1)) {
          return false;
        }

        if (titleSearchTerm && place.title.toLowerCase().indexOf(titleSearchTerm.toLowerCase()) === -1) {
          return false;
        }

        if (yearSearchTerm &&
          ((place.dates.startdate && place.dates.startdate.toString().indexOf(yearSearchTerm) === -1) || !place.dates.startdate)) {
          return false;
        }

        return true;
      });
    } else {
      return places;
    }
  }
}
