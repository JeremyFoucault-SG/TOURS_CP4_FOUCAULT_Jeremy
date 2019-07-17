import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewartistComponent } from './newartist.component';

describe('NewartistComponent', () => {
  let component: NewartistComponent;
  let fixture: ComponentFixture<NewartistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewartistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewartistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
