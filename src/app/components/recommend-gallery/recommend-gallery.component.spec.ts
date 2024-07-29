import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendGalleryComponent } from './recommend-gallery.component';

describe('RecommendGalleryComponent', () => {
  let component: RecommendGalleryComponent;
  let fixture: ComponentFixture<RecommendGalleryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecommendGalleryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RecommendGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
