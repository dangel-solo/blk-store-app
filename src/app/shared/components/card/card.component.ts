import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Store } from 'src/app/core/models/store.model';
import { CustomValidators } from 'src/app/core/utils/validations';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() store!: Store;
  @Output() clickEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  getUrl(url: string): string {
    return CustomValidators.validUrl(url);
  }

  onCardClick() {
    this.clickEmitter.emit(this.store.id);
  }
}
