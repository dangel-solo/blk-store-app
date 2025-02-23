import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Rating } from 'src/app/core/models/game.model';
import { CustomValidators } from 'src/app/core/utils/validations';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss'],
})
export class GameDetailComponent implements OnInit {
  title!: string;
  description!: string;
  released!: Date;
  ratings!: Rating[];
  images!: string[];

  constructor(public bsModalRef: BsModalRef) {}

  ngOnInit(): void {}

  setRatingColor(value: string): string {
    return CustomValidators.getRatingColor(value);
  }
}
