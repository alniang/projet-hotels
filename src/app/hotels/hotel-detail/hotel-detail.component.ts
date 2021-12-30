import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IHotel } from '../shared/models/hotel';
import { HotelListService } from '../shared/services/hotel-list.service';

@Component({
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.css'],
})
export class HotelDetailComponent implements OnInit {
  public hotel: IHotel = <IHotel>{};

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private hotelListService: HotelListService
  ) {}

  ngOnInit(): void {
    const id: number = +this.route.snapshot.paramMap.get('id');

    this.hotelListService.getHotels().subscribe((hotels: IHotel[]) => {
      this.hotel = hotels.find((hotel) => hotel.id === id);
      console.log('ID : ', this.hotel);
    });
  }

  public backToList(): void {
    this.router.navigate(['/hotels']);
  }
}
