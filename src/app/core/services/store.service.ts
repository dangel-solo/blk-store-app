import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { GetStoresRs, Store } from '../models/store.model';
import { map, switchMap, tap } from 'rxjs/operators';
import { GameData, GetGameRs } from '../models/game.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private http: HttpService, private router: Router) {}

  getStores(): Observable<Store[]> {
    return this.http.get<GetStoresRs>('stores').pipe(
      map((response: GetStoresRs) => response.results),
      tap(console.log)
    );
  }

  getStoreDetails(id: number): Observable<Store> {
    return this.http.get<Store>(`stores/${id}`).pipe(tap(console.log));
  }

  getGames(id: number): Observable<GameData> {
    return this.http.get<GetGameRs>(`games/${id}`).pipe(
      map(
        ({
          name,
          description_raw,
          released,
          ratings,
          background_image,
          background_image_additional,
        }) => ({
          title: name,
          description: description_raw,
          released,
          ratings,
          images: [background_image, background_image_additional].filter(
            (value) => value
          ),
        })
      ),
      tap(console.log)
    );
  }

  getStoreDetailsComplete(id: number): Observable<Store> {
    return this.getStores().pipe(
      switchMap((stores: Store[]) => {
        const store = stores.find((s) => s.id === id);
        if (!store) {
          this.router.navigate(['/stores']);
          throw new Error('Store not found');
        }
        return this.getStoreDetails(id).pipe(
          map((response: Store) => ({
            ...response,
            games: store.games,
          }))
        );
      })
    );
  }
}
