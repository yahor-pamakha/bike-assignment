import { Bike } from '@models/bike.model';
import { createAction, props } from '@ngrx/store';

export const loadBikes = createAction(
  '[Bike] Load Bikes',
  props<{
    pageNumber: number;
    itemsPerPage: number;
    location: string;
  }>()
);

export const loadBikesSuccess = createAction(
  '[Bike] Load Bikes Success',
  props<{ bikes: Bike[] }>()
);

export const loadBikesFailure = createAction('[Bike] Load Bikes Failure', props<{ error: any }>());

export const loadDetailedBike = createAction(
  '[Bike] Load Detailed Bike',
  props<{ bikeId: string }>()
);

export const loadDetailedBikeSuccess = createAction(
  '[Bike] Load Detailed Bike Success',
  props<{ bike: Bike }>()
);

export const loadDetailedBikeFailure = createAction(
  '[Bike] Load Detailed Bike Failure',
  props<{ error: any }>()
);
