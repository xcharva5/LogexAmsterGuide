import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaceDetailComponent } from './Components/place-detail/place-detail.component';
import { PlacesListComponent } from './Components/places-list/places-list.component';

const routes: Routes = [
  { path: 'detail/:placeid', component: PlaceDetailComponent },
  { path: 'places', component: PlacesListComponent },
  { path: '', redirectTo: 'places', pathMatch: 'full'},
  { path: '**', redirectTo: 'places'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
