import { Bike, DetailedBike, SearchCount } from '@models/bike.model';
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
  props<{ bike: DetailedBike }>()
);

export const loadDetailedBikeFailure = createAction(
  '[Bike] Load Detailed Bike Failure',
  props<{ error: any }>()
);

export const loadSearchCount = createAction(
  '[Bike] Load Search Count',
  props<{ location: string }>()
);

export const loadSearchCountSuccess = createAction(
  '[Bike] Load Search Count Success',
  props<{ searchCount: SearchCount }>()
);

export const loadSearchCountFailure = createAction(
  '[Bike] Load Search Count Failure',
  props<{ error: any }>()
);
