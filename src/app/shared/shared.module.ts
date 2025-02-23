import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [CardComponent, ProgressBarComponent],
  imports: [
    CommonModule,
    ModalModule.forRoot(),
    ProgressbarModule.forRoot(),
    CarouselModule.forRoot(),
  ],
  exports: [
    CardComponent,
    ModalModule,
    ProgressbarModule,
    ProgressBarComponent,
    CarouselModule,
  ],
  providers: [BsModalService],
})
export class SharedModule {}
