import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { GetGameRs } from 'src/app/core/models/game.model';
import { Store } from 'src/app/core/models/store.model';
import { StoreService } from 'src/app/core/services/store.service';
import { ModalComponent } from 'src/app/shared/components/modal/modal.component';

@Component({
  selector: 'app-store-detail',
  templateUrl: './store-detail.component.html',
  styleUrls: ['./store-detail.component.scss'],
})
export class StoreDetailComponent implements OnInit {
  modalDataMock = {
    title: 'TITLE MOCK',
    name: 'NAME MOCK',
  };
  @ViewChild('myModal') modalTemplate!: TemplateRef<any>;
  modalRef?: BsModalRef;
  store!: Store;
  game!: GetGameRs;

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private modalService: BsModalService
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
    this.storeService.getGames(id).subscribe((game: GetGameRs) => {
      this.game = game;
      this.openConfirmDialog();
    });
  }

  openConfirmDialog() {
    const initialState = {
      title: this.game.name,
      description: this.game.description_raw,
      released: this.game.released,
      ratings: this.game.ratings,
    };
    this.modalRef = this.modalService.show(ModalComponent, {
      class: 'modal-lg',
      initialState,
    });
  }
}
