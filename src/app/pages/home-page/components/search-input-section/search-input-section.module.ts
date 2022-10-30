import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/material.module';
import { SearchInputSectionComponent } from './search-input-section.component';

@NgModule({
  declarations: [SearchInputSectionComponent],
  imports: [CommonModule, ReactiveFormsModule, MaterialModule],
  exports: [SearchInputSectionComponent],
})
export class SearchInputSectionModule {}
