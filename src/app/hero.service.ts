import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { IHero } from './hero/hero';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getHeroes(): Observable<IHero[]> {
    return this.http.get<IHero[]>(this.heroesUrl)
    
  }

  getHero(id: number): Observable<IHero> {
    return this.http.get<IHero>(this.heroesUrl+id)
  }
}
