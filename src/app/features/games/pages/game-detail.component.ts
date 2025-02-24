import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { LABELS } from 'src/app/core/constants/labels';
import { Rating } from 'src/app/core/models/game.model';
import { CustomUtils } from 'src/app/core/utils/utils';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
})
export class GameDetailComponent implements OnInit {
  // Propiedades recibidas a través de CustomModalService { initialState }
  title!: string;
  description!: string;
  released!: Date;
  ratings!: Rating[];
  images!: string[];

  LABELS = LABELS;

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {}

  setRatingColor(value: string): string {
    return CustomUtils.getRatingColor(value);
  }
}
