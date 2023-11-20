import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllcandidatsComponent } from './get-allcandidats.component';

describe('GetAllcandidatsComponent', () => {
  let component: GetAllcandidatsComponent;
  let fixture: ComponentFixture<GetAllcandidatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetAllcandidatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetAllcandidatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
