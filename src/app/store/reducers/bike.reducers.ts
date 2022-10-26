import { Bike } from '@models/bike.model';
import { createReducer, on } from '@ngrx/store';
import * as BikeActions from '@store/actions/bike.actions';

export const bikeFeatureKey = 'bike';

export interface BikeState {
  bikes: Bike[];
  detailedBike: Bike;
  isLoading: boolean;
  isLoaded: boolean;
}

const initialState: BikeState = {
  bikes: [],
  detailedBike: {
    id: '',
    title: '',
    year: 0,
    type_of_cycle: '',
    frame_model: '',
    frame_material_slug: '',
    frame_colors: [],
    description: '',
    manufacturer_name: '',
    large_img: '',
    thumbnail: '',
  },
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
