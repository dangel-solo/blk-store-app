import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(true);
  loading$ = this.loadingSubject.asObservable();

  constructor() {}

  showLoading() {
    setTimeout(() => {
      this.loadingSubject.next(true);
    }, 0);
  }

  hideLoading() {
    setTimeout(() => {
      this.loadingSubject.next(false);
    }, 0);
  }
}
