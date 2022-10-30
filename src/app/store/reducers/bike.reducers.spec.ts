import { bikeReducer, BikeState, initialState } from './bike.reducers';
import * as BikeActions from '@store/actions/bike.actions';

const mockBikes = [
  {
    id: 123,
    frame_model: 'model',
    year: 1234,
    manufacturer_name: 'manufacturer',
    status: 'status',
    frame_colors: ['color'],
    thumb: 'thumb',
  },
];

const mockDetailedBike = {
  id: 123,
  frame_model: 'model',
  year: 1234,
  manufacturer_name: 'manufacturer',
  status: 'status',
  frame_colors: ['color'],
  thumb: 'thumb',
  description: 'description',
  frame_size: 'frame_size',
  frame_material_slug: 'material',
  handlebar_type_slug: 'handlebar',
  front_wheel_size_iso_bsd: 1,
  rear_wheel_size_iso_bsd: 2,
  large_img: 'image',
};

const mockSearchCount = {
  proximity: 1,
  stolen: 2,
  non: 3,
};

describe('Bike reducer', () => {
  it('should handle loadBikes', () => {
    const expectedState: BikeState = { ...initialState, isLoading: true, isLoaded: false };
    const action = BikeActions.loadBikes({ pageNumber: 1, itemsPerPage: 10, location: '' });
    const state = bikeReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle loadBikesSuccess', () => {
    const expectedState: BikeState = {
      ...initialState,
      bikes: mockBikes,
      isLoading: false,
      isLoaded: true,
    };
    const action = BikeActions.loadBikesSuccess({ bikes: mockBikes });
    const state = bikeReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle loadDetailedBike', () => {
    const expectedState: BikeState = { ...initialState, isLoading: true, isLoaded: false };
    const action = BikeActions.loadDetailedBike({ bikeId: '123' });
    const state = bikeReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle loadDetailedBikeSuccess', () => {
    const expectedState: BikeState = {
      ...initialState,
      detailedBike: mockDetailedBike,
      isLoading: false,
      isLoaded: true,
    };
    const action = BikeActions.loadDetailedBikeSuccess({ bike: mockDetailedBike });
    const state = bikeReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle loadSearchCount', () => {
    const expectedState: BikeState = { ...initialState, isLoading: true, isLoaded: false };
    const action = BikeActions.loadSearchCount({ location: 'location' });
    const state = bikeReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });

  it('should handle loadSearchCountSuccess', () => {
    const expectedState: BikeState = {
      ...initialState,
      searchCount: mockSearchCount,
      isLoading: false,
      isLoaded: true,
    };
    const action = BikeActions.loadSearchCountSuccess({ searchCount: mockSearchCount });
    const state = bikeReducer(initialState, action);

    expect(state).toEqual(expectedState);
  });
});
