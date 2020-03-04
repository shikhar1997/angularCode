import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByNameComponentComponent } from './search-by-name-component.component';

describe('SearchByNameComponentComponent', () => {
  let component: SearchByNameComponentComponent;
  let fixture: ComponentFixture<SearchByNameComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByNameComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByNameComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
