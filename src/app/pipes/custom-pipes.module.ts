import { NgModule } from '@angular/core';
import { HandlebarPipe } from './handlebar-pipe';

@NgModule({
  declarations: [HandlebarPipe],
  exports: [HandlebarPipe],
})
export class CustomPipesModule {}
