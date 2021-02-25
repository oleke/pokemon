import { Component, EventEmitter, Output, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() textChangeEvent = new EventEmitter<string>();
  form?: FormGroup;
  search?: string;
  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      search: ['', Validators.required]
    });

    this.form.get('search')?.valueChanges.subscribe(value => this.onTextChange(value));
  }

  onTextChange(search: string): void {
    this.search = search;
    this.textChangeEvent.emit(search)
  }

}
