import { NgModule } from '@angular/core';
import { BikeFieldPipe } from './bike-field-pipe';

@NgModule({
  declarations: [BikeFieldPipe],
  exports: [BikeFieldPipe],
})
export class CustomPipesModule {}
