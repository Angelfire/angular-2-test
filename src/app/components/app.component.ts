import { Component } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {

   /**
   * The component maintain a list of Pokemon objects
   * that will be rendered.
   *
   * We initialize it to an empty list.
   */
  pokemon:Pokemon[] = [];

  /**
   * A boolean that represents if we are currently loading data.
   */
  isLoading:boolean = false;

   /**
   * This boolean will be set to true if an error occurred.
   */
  error:boolean = false;

  constructor(private pokeapiService:PokeapiService) {}

  ngOnInit() {
    this.loadPokemon();
  }

  /**
   * Use the PokeApiService to load the first pokemons.
   */
  loadPokemon() {
    this.isLoading = true;

    this.pokeapiService.getPokemon(this.pokemon.length, 20)
      .then(pokemon => {
        pokemon = pokemon.map(p => {
          p.imageLoaded = false;
          return p;
        });

        this.pokemon = this.pokemon.concat(pokemon);
        this.isLoading = false;
        this.error = false;
      })
      .catch(() =>{
        this.error = true;
        this.isLoading = true;
      });
  }
}
