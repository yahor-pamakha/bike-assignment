import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
})
export class SpinnerComponent implements OnChanges {
  @Input()
  spin!: boolean;

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes', changes);
  }
}
