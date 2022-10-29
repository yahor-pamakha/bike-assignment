import { Bike, DetailedBike } from '@models/bike.model';
import { createReducer, on } from '@ngrx/store';
import * as BikeActions from '@store/actions/bike.actions';

export const bikeFeatureKey = 'bike';

export interface BikeState {
  bikes: Bike[];
  detailedBike: DetailedBike;
  isLoading: boolean;
  isLoaded: boolean;
}

const initialState: BikeState = {
  bikes: [],
  detailedBike: {} as DetailedBike,
  isLoading: false,
  isLoaded: false,
};

export const bikeReducer = createReducer(
  initialState,
  on(BikeActions.loadBikes, state => ({
    ...state,
    isLoading: true,
    isLoaded: false,
  })),
  on(BikeActions.loadBikesSuccess, (state, action) => ({
    ...state,
    bikes: action.bikes,
    isLoading: false,
    isLoaded: true,
  })),
  on(BikeActions.loadBikesFailure, state => state),
  on(BikeActions.loadDetailedBike, state => ({
    ...state,
    isLoading: true,
    isLoaded: false,
  })),
  on(BikeActions.loadDetailedBikeSuccess, (state, action) => ({
    ...state,
    detailedBike: action.bike,
    isLoading: false,
    isLoaded: true,
  })),
  on(BikeActions.loadDetailedBikeFailure, state => state)
);
