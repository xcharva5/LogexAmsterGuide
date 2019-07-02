import { Pipe, PipeTransform } from '@angular/core';
import { IPlace } from 'src/app/Structures/place';
import { zip } from 'rxjs';

@Pipe({
  name: 'substringFilter'
})
export class SubstringFilterPipe implements PipeTransform {

  transform(places: IPlace[], titleSearchTerm: string, zipSearchTerm: string): IPlace[] {
    if (places && places.length) {
      return places.filter(place => {

        if (zipSearchTerm
          && (!place.location.zipcode || place.location.zipcode.toLowerCase().indexOf(zipSearchTerm.toLowerCase()) === -1)) {
          return false;
        }

        if (titleSearchTerm && place.title.toLowerCase().indexOf(titleSearchTerm.toLowerCase()) === -1) {
          return false;
        }

        return true;
      });
    } else {
      return places;
    }
  }
}
