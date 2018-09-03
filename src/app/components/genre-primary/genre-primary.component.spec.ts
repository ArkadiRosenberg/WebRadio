import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenrePrimaryComponent } from './genre-primary.component';

describe('GenrePrimaryComponent', () => {
  let component: GenrePrimaryComponent;
  let fixture: ComponentFixture<GenrePrimaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenrePrimaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenrePrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
