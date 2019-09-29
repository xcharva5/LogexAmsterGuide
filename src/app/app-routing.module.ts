import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceDetailComponent } from './Components/Places/place-detail/place-detail.component';
import { PlacesListComponent } from './Components/Places/places-list/places-list.component';
import { PlacesMapComponent } from './Components/Places/places-map/places-map.component';
import { EventsListComponent } from './Components/Events/events-list/events-list.component';
import { PlacesComponent } from './Components/Places/places/places.component';
import { EventsMapComponent } from './Components/Events/events-map/events-map.component';
import { EventDetailComponent } from './Components/Events/event-detail/event-detail.component';
import { EventsComponent } from './Components/Events/events/events.component';

const routes: Routes = [
  { path: 'places', component: PlacesComponent, children: [
      { path: 'list', component: PlacesListComponent },
      { path: 'map', component: PlacesMapComponent },
      { path: 'detail/:placeid', component: PlaceDetailComponent }
  ]},
  { path: 'events', component: EventsComponent, children: [
      { path: 'list', component: EventsListComponent },
      { path: 'map', component: EventsMapComponent },
      { path: 'detail/:eventid', component: EventDetailComponent }
  ]},
  { path: '', redirectTo: 'places/list', pathMatch: 'full'},
  { path: '**', redirectTo: 'places/list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
