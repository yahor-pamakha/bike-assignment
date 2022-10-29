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
import { GenericHooks } from 'src/app/util/generic-hooks';

@Component({
  selector: 'app-bike-page',
  templateUrl: './bike-page.component.html',
  styleUrls: ['./bike-page.component.scss'],
})
export class BikePageComponent extends GenericHooks implements OnInit {
  @Input() detailedBike: DetailedBike | undefined;

  isLoading = false;
  infoItems = [
    {
      title: 'Manufacturer',
      field: 'manufacturer_name' as keyof DetailedBike,
    },
    {
      title: 'Year',
      field: 'year' as keyof DetailedBike,
    },
    {
      title: 'Frame size',
      field: 'frame_size' as keyof DetailedBike,
    },
    {
      title: 'Front wheel diameter',
      field: 'front_wheel_size_iso_bsd' as keyof DetailedBike,
    },
    {
      title: 'Rear wheel diameter',
      field: 'rear_wheel_size_iso_bsd' as keyof DetailedBike,
    },
    {
      title: 'Frame Material',
      field: 'frame_material_slug' as keyof DetailedBike,
    },
  ];

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
