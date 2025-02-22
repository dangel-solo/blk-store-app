import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreListComponent } from './pages/store-list/store-list.component';
import { StoreDetailComponent } from './pages/store-detail/store-detail.component';

const routes: Routes = [
  { path: '', component: StoreListComponent },
  { path: ':id', component: StoreDetailComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StoreRoutingModule {}
