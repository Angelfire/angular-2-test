import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Pokemon } from '../components/pokemon'

/**
 * Adds the toPromise() method to
 * convert an Observable to a Promise.
 */
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PokeapiService {
  private baseUrl:string = 'http://pokeapi.co/api/v2/pokemon/';
  //private baseSpriteUrl: string = 'http://pokeapi.co/media/sprites/pokemon/';
  private baseSpriteUrl:string = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  constructor(private http:Http) { }

  /**
   * Fetches data from the Pokémon API.
   * @param offset minvalue
   * @param limit amount of pokemon to retrieve for each request
   */
  getPokemon(offset: number, limit: number) {
    return this.http.get(`${this.baseUrl}?offset=${offset}&limit=${limit}`)
      .toPromise()
      .then(response => response.json().results)
      .then(items => items.map((item, idx) => {
        const id: number = idx + offset + 1;

        return {
          name: item.name,
          sprite: `${this.baseSpriteUrl}${id}.png`,
          id
        }
      }));
  }
}
