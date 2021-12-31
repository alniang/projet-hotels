import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { of } from 'rxjs';
import { IHotel } from '../models/hotel';

@Injectable({
  providedIn: 'root',
})
export class HotelListService {
  // private readonly HOTEL_API_URL = 'api/hotels.json';
  private readonly HOTEL_API_URL = 'api/hotels';
  getHotels(): Observable<IHotel[]> {
    return this.http
      .get<IHotel[]>(this.HOTEL_API_URL)
      .pipe(
        tap(
          (hotels) => console.log('hotels :', hotels),
          catchError(this.handleError)
        )
      );
  }

  public getHotelById(id: number): Observable<IHotel> {
    const url = `${this.HOTEL_API_URL}/${id}`;
    if (id === 0) return of(this.getDefaultHotel());
    // return this.getHotels().pipe(
    //   map((hotels) => hotels.find((hotel) => hotel.id === id))
    // );
    return this.http.get<IHotel>(url).pipe(catchError(this.handleError));
  }

  public updateHotel(hotel: IHotel): Observable<IHotel> {
    const url = `${this.HOTEL_API_URL}/${hotel.id}`;
    return this.http.put<IHotel>(url, hotel).pipe(catchError(this.handleError));
  }

  private getDefaultHotel(): IHotel {
    return {
      id: 0,
      hotelName: null,
      description: null,
      price: null,
      rating: null,
      imageUrl: null,
    };
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError('Something bad happened; please try again later.');
  }
  constructor(private http: HttpClient) {}
}
