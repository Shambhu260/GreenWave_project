import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TastDetailsComponent } from './tast.details.component';

describe('TastDetailsComponent', () => {
  let component: TastDetailsComponent;
  let fixture: ComponentFixture<TastDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TastDetailsComponent]
    });
    fixture = TestBed.createComponent(TastDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
