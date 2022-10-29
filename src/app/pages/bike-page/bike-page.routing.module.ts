import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BikePageComponent } from './bike-page.component';

const routes: Routes = [
  {
    path: '',
    component: BikePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BikePageRoutingModule {}
