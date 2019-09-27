import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceDetailComponent } from './Components/place-detail/place-detail.component';
import { PlacesListComponent } from './Components/places-list/places-list.component';
import { PlacesMapComponent } from './Components/places-map/places-map.component';
import { EventsListComponent } from './Components/events-list/events-list.component';

const routes: Routes = [
  { path: 'detail/:placeid', component: PlaceDetailComponent },
  { path: 'places', component: PlacesListComponent },
  { path: 'placesmap', component: PlacesMapComponent},
  { path: 'events', component: EventsListComponent},
  { path: '', redirectTo: 'places', pathMatch: 'full'},
  { path: '**', redirectTo: 'places'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
