import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamesCardListComponent } from './games-card-list.component';

describe('GamesCardListComponent', () => {
  let component: GamesCardListComponent;
  let fixture: ComponentFixture<GamesCardListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamesCardListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamesCardListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
