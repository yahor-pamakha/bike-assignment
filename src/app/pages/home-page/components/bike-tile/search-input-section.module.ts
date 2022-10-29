import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/material.module';
import { BikeTileComponent } from './bike-tile.component';

@NgModule({
  declarations: [BikeTileComponent],
  imports: [CommonModule, MaterialModule, RouterModule],
  exports: [BikeTileComponent],
})
export class BikeTileModule {}
