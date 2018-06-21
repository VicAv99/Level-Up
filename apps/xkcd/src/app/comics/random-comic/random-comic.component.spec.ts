import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomComicComponent } from './random-comic.component';

describe('RandomComicComponent', () => {
  let component: RandomComicComponent;
  let fixture: ComponentFixture<RandomComicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomComicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
