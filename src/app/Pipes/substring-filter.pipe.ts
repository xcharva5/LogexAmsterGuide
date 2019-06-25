import { Pipe, PipeTransform } from '@angular/core';
import { IPlace } from 'src/app/Structures/place';

@Pipe({
  name: 'substringFilter'
})
export class SubstringFilterPipe implements PipeTransform {

  transform(places: IPlace[], searchTerm: string): IPlace[] {
    if (!places || !searchTerm) {
      return places;
    }

    return places.filter(place =>
      place.title.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
  }

}
