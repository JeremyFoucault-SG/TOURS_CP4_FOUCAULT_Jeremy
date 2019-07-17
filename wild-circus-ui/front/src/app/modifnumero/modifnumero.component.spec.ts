import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifnumeroComponent } from './modifnumero.component';

describe('ModifnumeroComponent', () => {
  let component: ModifnumeroComponent;
  let fixture: ComponentFixture<ModifnumeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifnumeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifnumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
