import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewnumeroComponent } from './newnumero.component';

describe('NewnumeroComponent', () => {
  let component: NewnumeroComponent;
  let fixture: ComponentFixture<NewnumeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewnumeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewnumeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
