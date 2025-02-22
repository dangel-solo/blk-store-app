import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/core/services/store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss'],
})
export class StoreListComponent implements OnInit {
  constructor(public storeService: StoreService) {}

  ngOnInit(): void {
    this.storeService.getStores().subscribe();
    this.storeService.getStoreDetails(1).subscribe();
    this.storeService.getGames(3328).subscribe();
  }
}
