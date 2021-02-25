import { Component, Input, OnChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../../pokemon.model';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnChanges {

  @Input() pokemonId?: number
  pokemon?: Pokemon
  constructor(private pokemonService: PokemonService) { }

  ngOnChanges(): void {
    if(this.pokemonId)
      this.pokemonService.getPokemonById(this.pokemonId).subscribe(pokemon => this.pokemon = pokemon)
  }

}
