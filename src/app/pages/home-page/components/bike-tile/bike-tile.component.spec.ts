import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeTileComponent } from './bike-tile.component';

describe('BikeTileComponent', () => {
  let component: BikeTileComponent;
  let fixture: ComponentFixture<BikeTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BikeTileComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BikeTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
