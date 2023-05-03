import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'bikes',
    pathMatch: 'full',
  },
  // {
  //   path: 'bikes',
  //   loadChildren: () =>
  //     import('./pages/home-page/home-page.module').then(module => module.HomePageModule),
  // },
  {
    path: 'appointment',
    loadChildren: () =>
      import('./pages/appointment-page/appointment-page.module').then(module => module.AppointmentPageModule),
  },
  {
    path: 'bikes/:bikeId',
    loadChildren: () =>
      import('./pages/bike-page/bike-page.module').then(module => module.BikePageModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
