import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokemon } from './pokemon.model';
import { environment } from 'src/environments/environment';
import { PagedData } from './paged-data.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private API_URL: string = `${environment.apiURL}/pokemons`;
  constructor(private http: HttpClient) { }

  getPokemons(offset: number = 0, search?: string): Observable<PagedData<Pokemon>> {
    let params = new HttpParams()
      .set('offset', `${offset}`)
      .set('limit', `20`);

    if (search) {
      params = params.set('search', search);
    }

    return this.http.get<PagedData<Pokemon>>(this.API_URL, {params})
  }

  getPokemonById(id: number): Observable<Pokemon>{
    return this.http.get<Pokemon>(`${this.API_URL}/${id}`)
  }

  searchPokemon(query: string): Observable<PagedData<Pokemon>> {
    return this.http.get<PagedData<Pokemon>>(this.API_URL, {params: {search: query}})
  }
}
