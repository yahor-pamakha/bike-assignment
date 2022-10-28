import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { map, Observable, of, startWith } from 'rxjs';
import { GenericHooks } from 'src/app/util/generic-hooks';

@Component({
  selector: 'app-search-input-section',
  templateUrl: './search-input-section.component.html',
  styleUrls: ['./search-input-section.component.scss'],
})
export class SearchInputSectionComponent extends GenericHooks implements OnInit {
  @Output() clickSearchButtonEvent = new EventEmitter<string>();

  locationFormControl = new FormControl();
  options = [
    'Amsterdam',
    'Utrecht',
    'Rotterdam',
    'Amersfoort',
    'Arnhem',
    'Nijmegen',
    'Eindhoven',
    'Enschede',
    'Zwolle',
    'Groningen',
    'Hengelo',
  ];
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

  onSearchButtonClick() {
    this.clickSearchButtonEvent.emit(this.locationFormControl.value);
  }

  private _filter(city: string) {
    const filterValue = city.toLowerCase();
    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }
}
