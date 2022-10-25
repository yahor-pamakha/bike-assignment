export interface Bike {
  id: string;
  title: string;
  year: number;
  type_of_cycle: string; // TODO: add enum type
  frame_model: string;
  frame_material_slug: string;
  frame_colors: string[];
  description: string;
  manufacturer_name: string;
  large_img: string;
  thumbnail: string;
}
