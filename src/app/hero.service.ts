import { Observable, of } from 'rxjs';
import { Injectable } from '@angular/core';
import { IHero } from './hero/hero';
import { HttpClient } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'https://rickandmortyapi.com/api/character';
  messageService: any;

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error); 
      return of(result as T);
    };
  }

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<IHero[]> {
    return this.http.get<IHero[]>(this.heroesUrl)
    .pipe(
      map((resp) => {
        return resp
      }),
      catchError(this.handleError<IHero[]>('getHeroes', []))
    );    
  }

  getHero(id: number): Observable<IHero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<IHero>(url).pipe(
      catchError(this.handleError<IHero>(`getHero id=${id}`))
    );
  }
}
