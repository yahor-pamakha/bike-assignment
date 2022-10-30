import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';
import * as BikeActions from '@store/actions/bike.actions';
import { BikeService } from '@services/bike.service';

@Injectable()
export class BikeEffects {
  constructor(private actions$: Actions, private bikeService: BikeService) {}

  loadBikes$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BikeActions.loadBikes),
      concatMap(payload =>
        this.bikeService.searchBikes(payload).pipe(
          mergeMap(bikes => [
            BikeActions.loadBikesSuccess({ bikes: bikes.bikes }),
            BikeActions.loadSearchCount({ location: payload.location }),
          ]),
          catchError(error => of(BikeActions.loadBikesFailure({ error })))
        )
      )
    );
  });

  loadDetailedBike$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BikeActions.loadDetailedBike),
      concatMap(payload =>
        this.bikeService.getBike(payload.bikeId).pipe(
          map(bike => BikeActions.loadDetailedBikeSuccess({ bike: bike.bike })),
          catchError(error => of(BikeActions.loadDetailedBikeFailure({ error })))
        )
      )
    );
  });

  loadSearchCount$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(BikeActions.loadSearchCount),
      concatMap(payload =>
        this.bikeService.getSearchBikeCount(payload.location).pipe(
          map(searchCount => BikeActions.loadSearchCountSuccess({ searchCount })),
          catchError(error => of(BikeActions.loadSearchCountFailure({ error })))
        )
      )
    );
  });
}
