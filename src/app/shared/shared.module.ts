import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { BsModalService, ModalModule } from 'ngx-bootstrap/modal';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CarouselComponent } from './components/carousel/carousel.component';
import { NotEmptyPipe } from '../core/utils/pipes/not-empty.pipe';
import { NotImagePipe } from '../core/utils/pipes/not-image.pipe';
import { NotUrlPipe } from '../core/utils/pipes/not-url.pipe';

@NgModule({
  declarations: [
    CardComponent,
    ProgressBarComponent,
    CarouselComponent,
    NotEmptyPipe,
    NotImagePipe,
    NotUrlPipe,
  ],
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
    CarouselComponent,
    NotEmptyPipe,
    NotImagePipe,
    NotUrlPipe,
  ],
  providers: [BsModalService],
})
export class SharedModule {}
