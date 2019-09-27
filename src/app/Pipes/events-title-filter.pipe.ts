import { Pipe, PipeTransform } from '@angular/core';
import { Event } from 'src/app/Structures/event';

@Pipe({
  name: 'eventsTitleFilter'
})
export class EventsTitleFilterPipe implements PipeTransform {

  transform(places: Event[], titleSearchTerm: string): Event[] {
    if (places && places.length) {
      return places.filter(place => {

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
