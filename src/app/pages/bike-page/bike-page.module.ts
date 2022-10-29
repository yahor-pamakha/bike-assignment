import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CustomPipesModule } from 'src/app/pipes/custom-pipes.module';
import { BikePageComponent } from './bike-page.component';

@NgModule({
  declarations: [BikePageComponent],
  imports: [CommonModule, CustomPipesModule],
  exports: [BikePageComponent],
})
export class BikePageModule {}
