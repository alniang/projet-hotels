import { Component, OnInit } from '@angular/core';
import { IHotel } from '../shared/models/hotel';
import { HotelListService } from '../shared/services/hotel-list.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css'],
})
export class HotelListComponent implements OnInit {
  title = 'Liste des hotels';

  public hotels: IHotel[] = [];

  public showBadge: boolean = true;

  private _hotelFilter = 'mot';

  public filteredHotels: IHotel[] = [];

  public receivedRating: string;

  constructor(private hotelListService: HotelListService) {}

  ngOnInit(): void {
    this.hotelListService.getHotels().subscribe(
      (hotels) => {
        this.hotels = hotels;
        this.filteredHotels = this.hotels;
      },
      (err) => console.log(err)
    );
    this.hotelFilter = '';
  }

  public toggleIsNewBadge(): void {
    this.showBadge = !this.showBadge;
  }

  public get hotelFilter(): string {
    return this._hotelFilter;
  }

  public set hotelFilter(filter: string) {
    this._hotelFilter = filter;
    this.filteredHotels = this.hotelFilter
      ? this.filterHotels(this.hotelFilter)
      : this.hotels;
  }

  public receiveRatingClicked(message: string) {
    this.receivedRating = message;
  }

  private filterHotels(criteria: string): IHotel[] {
    criteria = criteria.toLocaleLowerCase();

    const res = this.hotels.filter(
      (hotel: IHotel) =>
        hotel.hotelName.toLocaleLowerCase().indexOf(criteria) !== -1
    );
    return res;
  }
}
