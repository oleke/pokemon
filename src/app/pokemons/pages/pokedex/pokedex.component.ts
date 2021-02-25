import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  pokemonId?: number;
  search?: string;
  constructor() { }

  ngOnInit(): void {
  }

  onSelectedPokemonEvent(pokemonId: number){
    this.pokemonId = pokemonId;
  }

  onSearchPokemonEvent(search: string): void{
    this.search = search;
  }



}
