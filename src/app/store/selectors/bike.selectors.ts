import { createFeatureSelector, createSelector } from '@ngrx/store';
import { bikeFeatureKey, BikeState } from '@store/reducers/bike.reducers';

export const selectBikeState = createFeatureSelector<BikeState>(bikeFeatureKey);

export const selectBikes = createSelector(selectBikeState, (state: BikeState) => state.bikes);
export const selectDetailedBike = createSelector(
  selectBikeState,
  (state: BikeState) => state.detailedBike
);
export const selectSearchCount = createSelector(
  selectBikeState,
  (state: BikeState) => state.searchCount
);

export const selectBikesIsLoaded = createSelector(
  selectBikeState,
  (state: BikeState) => state.isLoaded
);

export const selectBikesIsLoading = createSelector(
  selectBikeState,
  (state: BikeState) => state.isLoading
);
