import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BandejaPersonasComponent } from './bandeja-personas.component';

describe('BandejaPersonasComponent', () => {
  let component: BandejaPersonasComponent;
  let fixture: ComponentFixture<BandejaPersonasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BandejaPersonasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BandejaPersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
