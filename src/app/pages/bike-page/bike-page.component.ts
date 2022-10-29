import { Component, Input } from '@angular/core';
import { DetailedBike } from '@models/bike.model';

@Component({
  selector: 'app-bike-page',
  templateUrl: './bike-page.component.html',
  styleUrls: ['./bike-page.component.scss'],
})
export class BikePageComponent {
  @Input() detailedBike!: DetailedBike;

  infoItems = [
    {
      title: 'Manufacturer',
      field: 'manufacturer_name' as keyof DetailedBike,
    },
    {
      title: 'Year',
      field: 'year' as keyof DetailedBike,
    },
    {
      title: 'Frame size',
      field: 'frame_size' as keyof DetailedBike,
    },
    {
      title: 'Front wheel diameter',
      field: 'front_wheel_size_iso_bsd' as keyof DetailedBike,
    },
    {
      title: 'Rear wheel diameter',
      field: 'rear_wheel_size_iso_bsd' as keyof DetailedBike,
    },
    {
      title: 'Frame Material',
      field: 'frame_material_slug' as keyof DetailedBike,
    },
  ];

  constructor() {}
}
