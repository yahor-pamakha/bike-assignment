import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchInputSectionComponent } from './search-input-section.component';

describe('SearchInputSectionComponent', () => {
  let component: SearchInputSectionComponent;
  let fixture: ComponentFixture<SearchInputSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SearchInputSectionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SearchInputSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
