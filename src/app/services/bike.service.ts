import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Bike } from '@models/bike.model';

@Injectable({
  providedIn: 'root',
})
export class BikeService {
  constructor(private http: HttpClient) {}

  searchBikes({ pageNumber = 1, itemsPerPage = 9, location = '' }): Observable<Bike[]> {
    let params = new HttpParams();
    params = params.append('page', String(pageNumber));
    params = params.append('per_page', String(itemsPerPage));
    params = params.append('location', location);
    return this.http.get<Bike[]>(`${environment.apiVersion}/search`, {
      params,
    });
  }

  getBike(bikeId: string): Observable<Bike> {
    return this.http.get<Bike>(`${environment.apiVersion}/bikes/${bikeId}`);
  }
}
