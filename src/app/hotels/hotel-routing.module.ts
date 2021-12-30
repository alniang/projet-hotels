import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { HotelDetailGuard } from './shared/guards/hotel-detail.guard';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'hotels/:id',
        component: HotelDetailComponent,
        canActivate: [HotelDetailGuard],
      },
      { path: 'hotels', component: HotelListComponent },
      { path: 'hotels/:id/edit', component: HotelEditComponent },
    ]),
  ],
  exports: [RouterModule],
})
export class HotelRoutingModule {}
