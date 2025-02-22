import { Component, OnInit } from '@angular/core';
import { Store } from 'src/app/core/models/store.model';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss'],
})
export class StoreListComponent implements OnInit {
  storeList: Store[] = [];
  constructor(public storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService
      .getStores()
      .subscribe((response: Store[]) => (this.storeList = response));
  }
}
