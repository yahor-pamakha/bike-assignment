import { Component, OnInit, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
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
  loadBikesParams = {
    pageNumber: 1,
    itemsPerPage: 10,
    location: '',
  };
  bikesLength = 1000;
  pageSizeOptions = [10, 20, 50];
  shouldScrollToBikes = false;

  constructor(private store: Store<AppState>) {
    super();
  }

  ngOnInit(): void {
    this.subscriptions.push(
      combineLatest([this.store.select(selectBikes), this.store.select(selectBikesIsLoaded)])
        .pipe(
          filter(([, isLoaded]) => isLoaded),
          map(([bikes]) => bikes)
        )
        .subscribe(bikes => {
          this.bikes = bikes;
          if (this.shouldScrollToBikes) {
            this.scrollToBikes();
            this.shouldScrollToBikes = false;
          }
        })
    );
  }

  onSearchButtonClick(location: string) {
    this.loadBikesParams = {
      ...this.loadBikesParams,
      pageNumber: 1,
      location,
    };
    this.loadBikes(this.loadBikesParams);
    this.shouldScrollToBikes = true;
  }

  onPageChange(event: PageEvent) {
    this.loadBikesParams = {
      ...this.loadBikesParams,
      pageNumber: event.pageIndex + 1,
      itemsPerPage: event.pageSize,
    };
    this.loadBikes(this.loadBikesParams);
    if (event.pageIndex !== event.previousPageIndex) {
      this.shouldScrollToBikes = true;
    }
  }

  private loadBikes({ pageNumber, itemsPerPage, location }: any): void {
    this.store.dispatch(loadBikes({ pageNumber, itemsPerPage, location }));
  }

  private scrollToBikes(): void {
    const scrollTarget = document.getElementsByClassName('container__content')[0];
    setTimeout(() => {
      scrollTarget.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'nearest',
      });
    }, 0);
  }
}
