import { DetailedBike } from '@models/bike.model';

export const BIKE_INFO_ITEMS = [
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
