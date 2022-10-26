import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { bikeReducer, BikeState } from '@store/reducers/bike.reducers';

export interface AppState {
  bike: BikeState;
}

export const reducers: ActionReducerMap<AppState> = {
  bike: bikeReducer,
};

export const metaReducers: Array<MetaReducer<any>> = [];
