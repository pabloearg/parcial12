import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostrarProductoComponent } from './mostrar-producto.component';

describe('MostrarProductoComponent', () => {
  let component: MostrarProductoComponent;
  let fixture: ComponentFixture<MostrarProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MostrarProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MostrarProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
