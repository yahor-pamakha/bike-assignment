import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteTrigger } from '@angular/material/autocomplete';
import { map, Observable, of, startWith } from 'rxjs';
import { AVAILABLE_LOCATIONS } from 'src/app/constants/home-page.const';
import { GenericHooks } from 'src/app/util/generic-hooks';

@Component({
  selector: 'app-search-input-section',
  templateUrl: './search-input-section.component.html',
  styleUrls: ['./search-input-section.component.scss'],
})
export class SearchInputSectionComponent extends GenericHooks implements OnInit {
  @Output() clickSearchButtonEvent = new EventEmitter<string>();

  @ViewChild(MatAutocompleteTrigger)
  autocomplete!: MatAutocompleteTrigger;

  locationFormControl = new FormControl();
  /* It would be better to get available locations from API. But there is no suitable endpoint. */
  options = AVAILABLE_LOCATIONS;
  filteredOptions: Observable<any> = of([]);

  constructor() {
    super();
  }

  ngOnInit(): void {
    this.filteredOptions = this.locationFormControl.valueChanges.pipe(
      startWith(''),
      map(name => (name ? this._filter(name) : this.options.slice()))
    );
  }

  displayFn(city: any) {
    return city;
  }

  returnFn(city: any) {
    return city;
  }

  onSearchButtonClick(event?: any) {
    event?.preventDefault();
    this.autocomplete.closePanel();
    this.clickSearchButtonEvent.emit(this.locationFormControl.value);
  }

  private _filter(city: string) {
    const filterValue = city.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
