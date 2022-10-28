import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BikeTileModule } from './components/bike-tile/search-input-section.module';
import { SearchInputSectionModule } from './components/search-input-section/search-input-section.module';
import { HomePageComponent } from './home-page.component';

@NgModule({
  declarations: [HomePageComponent],
  imports: [CommonModule, MatPaginatorModule, SearchInputSectionModule, BikeTileModule],
  exports: [HomePageComponent],
})
export class HomePageModule {}
