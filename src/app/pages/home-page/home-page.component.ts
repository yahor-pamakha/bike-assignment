import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { NavigationEnd, Router } from '@angular/router';
import { Bike } from '@models/bike.model';
import { Store } from '@ngrx/store';
import { loadBikes } from '@store/actions/bike.actions';
import {
  selectBikes,
  selectBikesIsLoaded,
  selectBikesIsLoading,
} from '@store/selectors/bike.selectors';
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
  targetBikeIndex = 0;
  isLoading = false;

  constructor(private store: Store<AppState>, private router: Router) {
    super();
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd && event.url.includes('bikes')) {
        this.targetBikeIndex = this.bikes.findIndex(
          bike => bike.id === Number(event.url.replace('/bikes/', ''))
        );
      } else if (event instanceof NavigationEnd) {
        this.scrollToBikes('auto', this.targetBikeIndex, true);
      }
    });

    this.subscriptions.push(
      combineLatest([this.store.select(selectBikes), this.store.select(selectBikesIsLoaded)])
        .pipe(
          filter(([, isLoaded]) => isLoaded),
          map(([bikes]) => bikes)
        )
        .subscribe(bikes => {
          this.bikes = bikes;
          if (this.shouldScrollToBikes) {
            this.scrollToBikes('smooth', 0, false);
            this.shouldScrollToBikes = false;
          }
        }),
      this.store.select(selectBikesIsLoading).subscribe(isLoading => {
        this.isLoading = isLoading;
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

  private scrollToBikes(
    behavior: ScrollBehavior,
    targetBikeIndex: number,
    scrollToBike: boolean
  ): void {
    setTimeout(() => {
      const scrollTarget = scrollToBike
        ? document.getElementsByTagName('app-bike-tile')[targetBikeIndex]
        : document.getElementsByClassName('container__content')[targetBikeIndex];
      scrollTarget.scrollIntoView({
        behavior,
        block: 'start',
        inline: 'nearest',
      });
    }, 0);
  }
}
