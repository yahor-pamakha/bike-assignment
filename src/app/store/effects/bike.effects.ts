import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
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
          map(bikes => BikeActions.loadBikesSuccess({ bikes: bikes.bikes })),
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
          catchError(error => of(BikeActions.loadBikesFailure({ error })))
        )
      )
    );
  });
}
