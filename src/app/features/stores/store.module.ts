import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreRoutingModule } from './store-routing.module';
import { StoreListComponent } from './pages/store-list/store-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [StoreListComponent],
  imports: [CommonModule, StoreRoutingModule, SharedModule],
})
export class StoreModule {}
