import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
