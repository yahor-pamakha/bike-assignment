import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomPipesModule } from 'src/app/pipes/custom-pipes.module';
import { BikePageRoutingModule } from './bike-page.routing.module';
import { BikePageComponent } from './bike-page.component';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';

@NgModule({
  declarations: [BikePageComponent],
  imports: [CommonModule, CustomPipesModule, BikePageRoutingModule, SpinnerModule],
  exports: [BikePageComponent],
})
export class BikePageModule {}
