import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { LABELS } from 'src/app/core/constants/labels';
import { Store } from 'src/app/core/models/store.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() store!: Store;
  @Output() clickEmitter: EventEmitter<number> = new EventEmitter<number>();

  LABELS = LABELS;

  constructor() {}

  ngOnInit(): void {}

  onCardClick() {
    this.clickEmitter.emit(this.store.id);
  }
}
