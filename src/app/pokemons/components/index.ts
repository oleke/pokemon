import { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";
import { PokemonsListComponent } from "./pokemons-list/pokemons-list.component";
import { HeaderComponent } from './header/header.component'
import { SearchComponent } from './search/search.component';

export const components: any[] = [
    HeaderComponent,
    PokemonsListComponent,
    PokemonDetailComponent,
    SearchComponent,
];

export { PokemonsListComponent } from "./pokemons-list/pokemons-list.component";
export { PokemonDetailComponent } from "./pokemon-detail/pokemon-detail.component";
export { HeaderComponent } from './header/header.component';
export { SearchComponent } from './search/search.component';
