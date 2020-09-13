import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MapComponent } from './map/map.component';
import { MapDetailComponent } from './map-detail/map-detail.component';

const routes: Routes = [
  { path: '', component: MapComponent },
  { path: 'map-detail/:id', component: MapDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
