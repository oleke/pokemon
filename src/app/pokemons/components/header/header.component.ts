import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() searchPokemonEvent = new EventEmitter<string>();

  loggedIn: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  onSearch(search: string): void {
    this.searchPokemonEvent.emit(search)
  }

}
