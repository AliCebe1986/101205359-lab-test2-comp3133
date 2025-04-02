import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MissiondetailsComponent } from './missiondetails/missiondetails.component';
import { MissionlistComponent } from './missionlist/missionlist.component';

const routes: Routes = [
  // Route for the mission list page
  { path: 'missions', component: MissionlistComponent },
  // Route for the mission details page, expects a 'flight_number' parameter
  { path: 'mission/:flight_number', component: MissiondetailsComponent },
  // Default route: Redirect to the mission list page
  { path: '', redirectTo: '/missions', pathMatch: 'full' },
  // Optional: Wildcard route for 404 Not Found page (create a NotFoundComponent if needed)
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }