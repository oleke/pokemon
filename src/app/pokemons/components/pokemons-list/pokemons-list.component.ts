import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PagedData } from '../../paged-data.model';
import { Pokemon } from '../../pokemon.model';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-pokemons-list',
  templateUrl: './pokemons-list.component.html',
  styleUrls: ['./pokemons-list.component.scss']
})
export class PokemonsListComponent implements OnInit {
  @Output() selectedPokemonEvent = new EventEmitter<number>();

  form?: FormGroup;
  pokemons?: PagedData<Pokemon>;
  search?: string;

  constructor(
    private fb: FormBuilder,
    private pokemonService: PokemonService,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      search: ['', Validators.required]
    });

    // this.form.get('search')?.valueChanges.subscribe(value => this.onSearch(value));

    this.pokemonService.getPokemons().subscribe(res => this.pokemons = res)
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

  onSearch(search: string): void {
    console.log(search);
    this.search = search;
    this.pokemonService.getPokemons(0, search).subscribe(res => this.pokemons = res)
  }

  onSubmit() {
    if (this.form?.valid) {
      this.onSearch(this.form?.value.search);
    }
  }

}
