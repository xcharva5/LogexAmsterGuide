import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceDetailComponent } from './Components/Places/place-detail/place-detail.component';
import { PlacesListComponent } from './Components/Places/places-list/places-list.component';
import { PlacesMapComponent } from './Components/Places/places-map/places-map.component';
import { EventsListComponent } from './Components/events-list/events-list.component';
import { PlacesComponent } from './Components/Places/places/places.component';

const routes: Routes = [
  { path: 'places', component: PlacesComponent, children: [
      { path: 'list', component: PlacesListComponent },
      { path: 'map', component: PlacesMapComponent },
      { path: 'detail/:placeid', component: PlaceDetailComponent }
  ]},
  { path: 'events', component: EventsListComponent},
  { path: '', redirectTo: 'places/list', pathMatch: 'full'},
  { path: '**', redirectTo: 'places/list'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
