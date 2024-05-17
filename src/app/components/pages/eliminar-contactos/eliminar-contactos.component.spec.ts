import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarContactosComponent } from './eliminar-contactos.component';

describe('EliminarContactosComponent', () => {
  let component: EliminarContactosComponent;
  let fixture: ComponentFixture<EliminarContactosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EliminarContactosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EliminarContactosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
