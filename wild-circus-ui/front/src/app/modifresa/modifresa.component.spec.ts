import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifresaComponent } from './modifresa.component';

describe('ModifresaComponent', () => {
  let component: ModifresaComponent;
  let fixture: ComponentFixture<ModifresaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifresaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModifresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
