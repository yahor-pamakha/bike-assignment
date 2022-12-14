import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { SpinnerModule } from 'src/app/shared/components/spinner/spinner.module';
import { BikeTileModule } from './components/bike-tile/bike-tile.module';
import { SearchInputSectionModule } from './components/search-input-section/search-input-section.module';
import { HomePageRoutingModule } from './home-page.routing.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [
    CommonModule,
    MatPaginatorModule,
    SpinnerModule,
    SearchInputSectionModule,
    HomePageRoutingModule,
    BikeTileModule,
  ],
  exports: [HomePageComponent],
})
export class HomePageModule {}
