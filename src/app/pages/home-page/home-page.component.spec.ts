import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { HomePageComponent } from './home-page.component';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomePageComponent],
      providers: [provideMockStore({})],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render content title in a span tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const componentInstance = fixture.debugElement.componentInstance;
    expect(
      compiled.getElementsByClassName('container__content-title gmat-title')[0].textContent
    ).toEqual(`${componentInstance.searchCount} bikes found`);
  });
});
