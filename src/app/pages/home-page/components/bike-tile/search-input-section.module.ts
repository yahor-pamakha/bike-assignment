import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from 'src/material.module';
import { BikeTileComponent } from './bike-tile.component';

@NgModule({
  declarations: [BikeTileComponent],
  imports: [CommonModule, MaterialModule],
  exports: [BikeTileComponent],
})
export class BikeTileModule {}
