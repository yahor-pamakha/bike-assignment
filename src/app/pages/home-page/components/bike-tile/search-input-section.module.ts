import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CustomPipesModule } from 'src/app/pipes/custom-pipes.module';
import { MaterialModule } from 'src/material.module';
import { BikeTileComponent } from './bike-tile.component';

@NgModule({
  declarations: [BikeTileComponent],
  imports: [CommonModule, MaterialModule, RouterModule, CustomPipesModule],
  exports: [BikeTileComponent],
})
export class BikeTileModule {}
