import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentComicComponent } from './current-comic.component';

describe('CurrentComicComponent', () => {
  let component: CurrentComicComponent;
  let fixture: ComponentFixture<CurrentComicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurrentComicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrentComicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
