import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreSecondaryComponent } from './genre-secondary.component';

describe('GenreSecondaryComponent', () => {
  let component: GenreSecondaryComponent;
  let fixture: ComponentFixture<GenreSecondaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenreSecondaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenreSecondaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
