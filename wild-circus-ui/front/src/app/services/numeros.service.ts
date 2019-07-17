import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable, VirtualTimeScheduler } from 'rxjs';
import { map } from 'rxjs/operators';
import { Numero } from '../shared/numeros.model';
import { Artist } from '../shared/artists.model';
import { Reservation } from '../shared/reservations.model';

@Injectable({
  providedIn: 'root'
})
export class NumerosService {

  constructor(private http: HttpClient) { }

  public api = `${environment.apiUrl}`;

  public getNumeros(): Observable<Numero>{
    return this.http.get(`${this.api}/numeros`).pipe(
      map((numeros: any) => { return numeros as Numero;
      })
      )
  };

  public getReservations(): Observable<Reservation>{
    return this.http.get(`${this.api}/reservations`).pipe(
      map((reservations: any) => { return reservations as Reservation;
      })
      )
  };

  public getArtists(id: number): Observable<Artist>{
    return this.http.get(`${this.api}/artists/numeros/${id}`).pipe(
      map((artists: any) => { return artists as Artist;
      })
      )
  };


  public createNumero(numeroForm: Numero): Observable <Numero>{
    return this.http.post<Numero>(`${this.api}/numeros`, numeroForm);
  }


  public createArtist(artistForm: Artist): Observable <Artist>{
    return this.http.post<Artist>(`${this.api}/artists`, artistForm);
  }


  public deleteNumero(id: number): Observable<Numero> {
    return this.http.delete(`${this.api}/numeros/${id}`).pipe(
      map((numero: any) => {
        return  numero as Numero;
      }),
    );
  }

  public deleteReservation(id: number): Observable<Reservation> {
    return this.http.delete(`${this.api}/reservations/${id}`).pipe(
      map((reservation: any) => {
        return  reservation as Reservation;
      }),
    );
  }

  public updateNumero(id: string, numeroForm: Numero): Observable<Numero> {
    return this.http.put<Numero>(`${this.api}/numeros/${id}`, numeroForm);
  }


  public updateReservation(id: string, resaForm: Reservation): Observable<Reservation> {
    return this.http.put<Reservation>(`${this.api}/reservations/${id}`, resaForm);
  }


  public deleteArtist(id: number): Observable<Artist> {
    return this.http.delete(`${this.api}/artists/${id}`).pipe(
      map((artists: any) => {
        return  artists as Artist;
      }),
    );
  }

  public addResa(resaForm: Reservation): Observable <Reservation>{
    return this.http.post<Reservation>(`${this.api}/reservations`, resaForm);
  }

}
