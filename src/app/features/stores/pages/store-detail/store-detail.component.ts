import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from 'src/app/core/models/store.model';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.scss'],
})
export class StoreDetailComponent implements OnInit {
  store!: Store;

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const storeId = Number(params.get('id'));
      this.getStoreDettails(storeId);
    });
  }

  getStoreDettails(id: number) {
    this.storeService
      .getStoreDetailsComplete(id)
      .subscribe((store: Store) => (this.store = store));
  }

  getGameDetails(id: number) {
    this.storeService.getGames(id).subscribe();
  }
}
