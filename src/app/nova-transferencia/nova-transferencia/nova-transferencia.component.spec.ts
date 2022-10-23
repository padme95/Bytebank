import { Transferencia } from './../../models/transferencia.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaTransferenciaComponent } from './nova-transferencia.component';
import { jsDocComment } from '@angular/compiler';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('NovaTransferenciaComponent', () => {
  let component: NovaTransferenciaComponent;
  let fixture: ComponentFixture<NovaTransferenciaComponent>;

  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //   })
  //   .compileComponents();
  // });

  beforeEach(async() => {
    TestBed.configureTestingModule({
      declarations: [NovaTransferenciaComponent],
      schemas: [NO_ERRORS_SCHEMA]
    });

    fixture = TestBed.createComponent(NovaTransferenciaComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should check if the limparCampos method was called', () => {
    component.valor = 0;
    component.destino = 213;
    component.limparCampos();
    expect(component.limparCampos).toHaveBeenCalled();
  });
});

// it('should check if the limparCampos method was called', () => {
//   component.valor = 12;
//   component.destino = 1230;
//   component.limparCampos();
//   expect(component.limparCampos).toHaveBeenCalled;

// })
