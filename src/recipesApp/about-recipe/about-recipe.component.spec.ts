import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutRecipeComponent } from './about-recipe.component';

describe('AboutRecipeComponent', () => {
  let component: AboutRecipeComponent;
  let fixture: ComponentFixture<AboutRecipeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboutRecipeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutRecipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
