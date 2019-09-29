import { Pipe, PipeTransform } from '@angular/core';
import { CulturalEvent } from 'src/app/Structures/culturalEvent';

@Pipe({
  name: 'eventsTitleFilter'
})
export class EventsTitleFilterPipe implements PipeTransform {

  transform(events: CulturalEvent[], titleSearchTerm: string): CulturalEvent[] {
    if (events && events.length) {
      return events.filter(event => {

        if (titleSearchTerm && event.title.toLowerCase().indexOf(titleSearchTerm.toLowerCase()) === -1) {
          return false;
        }

        return true;
      });
    } else {
      return events;
    }
  }
}
