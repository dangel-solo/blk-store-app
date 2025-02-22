import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Rating } from 'src/app/core/models/game.model';

const RATINGS_COLORS: any = {
  recommended: 'success',
  exceptional: 'info',
  meh: 'warning',
  skip: 'danger',
};

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  title!: string;
  description!: string;
  released!: Date;
  ratings!: Rating[];

  constructor(public bsModalRef: BsModalRef) {}

  public ngOnInit(): void {}

  setColorRating(value: string): string {
    return RATINGS_COLORS[value] || '';
  }
}
