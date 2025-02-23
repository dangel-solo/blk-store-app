import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { GameData } from 'src/app/core/models/game.model';
import { Store } from 'src/app/core/models/store.model';
import { CustomModalService } from 'src/app/core/services/custom-modal.service';
import { StoreService } from 'src/app/core/services/store.service';
import { GameDetailComponent } from 'src/app/features/games/pages/game-detail.component';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.scss'],
})
export class StoreDetailComponent implements OnInit {
  modalRef?: BsModalRef;
  store!: Store;
  gameData!: GameData;

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private customModalService: CustomModalService
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
    this.storeService.getGames(id).subscribe((game: GameData) => {
      this.gameData = game;
      this.openModal();
    });
  }

  openModal() {
    this.customModalService.openModalWithComponent(
      GameDetailComponent,
      this.gameData,
      'modal-lg custom-modal'
    );
  }
}
