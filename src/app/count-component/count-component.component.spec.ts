import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountComponentComponent } from './count-component.component';

describe('CountComponentComponent', () => {
  let component: CountComponentComponent;
  let fixture: ComponentFixture<CountComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
