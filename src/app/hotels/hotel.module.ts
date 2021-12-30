import { NgModule } from '@angular/core';

import { HotelListComponent } from './hotel-list/hotel-list.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { SharedModule } from '../shared/shared.module';
import { HotelRoutingModule } from './hotel-routing.module';
import { HotelEditComponent } from './hotel-edit/hotel-edit.component';

@NgModule({
  declarations: [HotelListComponent, HotelDetailComponent, HotelEditComponent],
  imports: [SharedModule, HotelRoutingModule],
})
export class HotelModule {}
