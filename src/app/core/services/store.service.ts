import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { GetStoresRs, Store } from '../models/store.model';
import { map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private http: HttpService) {}

  getStores(): Observable<Store[]> {
    return this.http.get<GetStoresRs>('stores').pipe(
      map((response: GetStoresRs) => response.results),
      tap(console.log)
    );
  }

  getStoreDetails(id: number): Observable<Store> {
    return this.http.get<Store>(`stores/${id}`).pipe(tap(console.log));
  }

  getGames(id: number): Observable<Store> {
    return this.http.get<Store>(`games/${id}`).pipe(tap(console.log));
  }
}
