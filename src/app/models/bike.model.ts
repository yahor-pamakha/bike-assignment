export interface Bike {
  id: number;
  frame_model: string;
  year: number;
  manufacturer_name: string;
  status?: string; //TODO: add enum
  frame_colors?: string[];
  thumb?: string;
}

export interface DetailedBike extends Bike {
  description: string;
  frame_size: string;
  frame_material_slug: string;
  handlebar_type_slug: string;
  front_wheel_size_iso_bsd: number;
  rear_wheel_size_iso_bsd: number;
  large_img: string;
}
