import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Observable } from 'rxjs';
import { GetStoresRs, Store } from '../models/store.model';
import { map, switchMap } from 'rxjs/operators';
import { GameData, GetGameRs } from '../models/game.model';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private http: HttpService, private router: Router) {}

  /**
   * Oobtener lista de tiendas de juegos
   * @return {*}  {Observable<Store[]>}
   * @memberof StoreService
   */
  getStores(): Observable<Store[]> {
    return this.http
      .get<GetStoresRs>('stores')
      .pipe(map((response: GetStoresRs) => response.results));
  }

  /**
   * Obtener detalle de tienda
   * @param {number} id
   * @return {*}  {Observable<Store>}
   * @memberof StoreService
   */
  getStoreDetails(id: number): Observable<Store> {
    return this.http.get<Store>(`stores/${id}`);
  }

  /**
   * Obtener detalle del juego
   * @param {number} id
   * @return {*}  {Observable<GameData>}
   * @memberof StoreService
   */
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
          ratings: ratings || [],
          images: [background_image, background_image_additional].filter(
            (value) => value
          ),
        })
      )
    );
  }

  /**
   * Obtener detalle completo de tienda.
   * Se obtiene la propiedad games del listado de tiendas y se añade a los detalles obtenidos por la API.
   * @param {number} id
   * @return {*}  {Observable<Store>}
   * @memberof StoreService
   */
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
