import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DetailedBike } from '@models/bike.model';
import { Store } from '@ngrx/store';
import { loadDetailedBike } from '@store/actions/bike.actions';
import {
  selectBikesIsLoaded,
  selectBikesIsLoading,
  selectDetailedBike,
} from '@store/selectors/bike.selectors';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppState } from 'src/app/app.state';
import { BIKE_INFO_ITEMS } from 'src/app/constants/bike-page.const';
import { GenericHooks } from 'src/app/util/generic-hooks';

@Component({
  selector: 'app-bike-page',
  templateUrl: './bike-page.component.html',
  styleUrls: ['./bike-page.component.scss'],
})
export class BikePageComponent extends GenericHooks implements OnInit {
  @Input() detailedBike: DetailedBike | undefined;

  isLoading = false;
  bikeInfoItems = BIKE_INFO_ITEMS;

  constructor(private store: Store<AppState>, private router: Router) {
    super();
  }

  ngOnInit(): void {
    const bikeId = this.router.url.replace('/bikes/', '');
    this.store.dispatch(loadDetailedBike({ bikeId }));

    this.subscriptions.push(
      combineLatest([this.store.select(selectDetailedBike), this.store.select(selectBikesIsLoaded)])
        .pipe(
          filter(([, isLoaded]) => isLoaded),
          map(([detailedBike]) => detailedBike)
        )
        .subscribe(detailedBike => {
          this.detailedBike = detailedBike;
        }),
      this.store.select(selectBikesIsLoading).subscribe(isLoading => {
        this.isLoading = isLoading;
      })
    );
  }
}
