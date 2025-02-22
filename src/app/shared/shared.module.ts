import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalComponent } from './components/modal/modal.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { ProgressBarComponent } from './components/progress-bar/progress-bar.component';

@NgModule({
  declarations: [CardComponent, ModalComponent, ProgressBarComponent],
  imports: [CommonModule, ModalModule.forRoot(), ProgressbarModule.forRoot()],
  exports: [
    CardComponent,
    ModalModule,
    ModalComponent,
    ProgressbarModule,
    ProgressBarComponent,
  ],
})
export class SharedModule {}
