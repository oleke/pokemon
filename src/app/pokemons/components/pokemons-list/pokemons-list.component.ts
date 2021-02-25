import { Component, EventEmitter, Input, Output, OnInit, OnChanges } from '@angular/core';
import { PagedData } from '../../paged-data.model';
import { Pokemon } from '../../pokemon.model';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnChanges {
  @Output() selectedPokemonEvent = new EventEmitter<number>();
  @Input()  search?: string;

  pokemons?: PagedData<Pokemon>;

  constructor(
    private pokemonService: PokemonService,
  ) { }

  ngOnChanges(): void {
    if(this.search){
      this.pokemonService.getPokemons(0, this.search).subscribe(res => this.pokemons = res)
    }
    else{
      this.pokemonService.getPokemons().subscribe(res => this.pokemons = res)
    }
  }

  onScroll(): void {
    if (this.pokemons) {
      this.pokemons.offset += this.pokemons.limit;
      this.pokemonService.getPokemons(this.pokemons.offset, this.search).subscribe(res => {
        if (this.pokemons) {
          this.pokemons.data = this.pokemons.data.concat(res.data);
        }
      });
    }
  }

  onSelected(value: number): void {
    this.selectedPokemonEvent.emit(value)
  }

}
