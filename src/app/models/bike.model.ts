export interface Bike {
  id: string;
  manufacturer_name: string;
  frame_model: string;
  year: number;
  status: string; //TODO: add enum
  frame_colors: string[];
  thumb: string;
}
