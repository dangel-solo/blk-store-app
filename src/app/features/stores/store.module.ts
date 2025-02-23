import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { StoreListComponent } from './pages/store-list/store-list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { StoreDetailComponent } from './pages/store-detail/store-detail.component';
import { GameDetailComponent } from '../games/pages/game-detail.component';

@NgModule({
  declarations: [StoreListComponent, StoreDetailComponent, GameDetailComponent],
  imports: [CommonModule, StoreRoutingModule, SharedModule],
})
export class StoreModule {}
