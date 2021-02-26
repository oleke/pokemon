import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent, PokedexComponent, PokeamComponent, SignupComponent } from './pages';

const routes: Routes = [
  {
    path: '',
    component: PokedexComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'team',
    component: PokeamComponent
  },
  {
    path: 'signup',
    component: SignupComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonsRoutingModule { }
