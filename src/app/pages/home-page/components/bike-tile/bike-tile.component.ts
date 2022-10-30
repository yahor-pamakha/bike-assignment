import { Component, Input } from '@angular/core';
import { Bike } from '@models/bike.model';

@Component({
  selector: 'app-bike-tile',
  templateUrl: './bike-tile.component.html',
  styleUrls: ['./bike-tile.component.scss'],
})
export class BikeTileComponent {
  @Input() bike: Bike | undefined;

  constructor() {}
}
