import { Component } from '@angular/core';
import { PokeapiService } from '../services/pokeapi.service';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  pokemon:Pokemon[] = [];
  isLoading:boolean = false;
  error:boolean = false;

  constructor(private pokeapiService:PokeapiService) {}

  ngOnInit() {
    this.loadPokemon();
  }

  loadPokemon() {
    this.isLoading = true;

    this.pokeapiService.getPokemon(this.pokemon.length, 20)
      .then(pokemon => {
        pokemon = pokemon.map(p => {
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
