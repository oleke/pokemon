import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokeamComponent } from './pokeam.component';

describe('PokeamComponent', () => {
  let component: PokeamComponent;
  let fixture: ComponentFixture<PokeamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokeamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
