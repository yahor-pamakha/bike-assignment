import { Component, OnInit } from '@angular/core';
import { Bike } from '@models/bike.model';
import { Store } from '@ngrx/store';
import { loadBikes } from '@store/actions/bike.actions';
import { selectBikes, selectBikesIsLoaded } from '@store/selectors/bike.selectors';
import { combineLatest } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { AppState } from 'src/app/app.state';
import { GenericHooks } from 'src/app/util/generic-hooks';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent extends GenericHooks implements OnInit {
  bikes: Bike[] = [];

  constructor(private store: Store<AppState>) {
    super();
  }

  ngOnInit(): void {
    this.store.dispatch(loadBikes({ location: 'Amsterdam' }));

    this.subscriptions.push(
      combineLatest([this.store.select(selectBikes), this.store.select(selectBikesIsLoaded)])
        .pipe(
          filter(([bikes, isLoaded]) => isLoaded),
          map(([bikes]) => bikes)
        )
        .subscribe(bikes => {
          this.bikes = bikes;
          console.log('bikes', bikes);
        })
    );
  }

  onSearchButtonClick(target: HTMLElement) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
  }
}
