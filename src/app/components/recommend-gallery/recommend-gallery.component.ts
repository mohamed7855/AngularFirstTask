import { Component } from '@angular/core';
import { image } from '../../interfaces/image';

@Component({
  selector: 'app-recommend-gallery',
  standalone: true,
  imports: [],
  templateUrl: './recommend-gallery.component.html',
  styleUrl: './recommend-gallery.component.css'
})
export class RecommendGalleryComponent {
  listRecommededImages:image[] = [
    {src:'assets/gallery/10.jpg'},
    {src:'assets/gallery/11.jpg'},
    {src:'assets/gallery/12.jpg'},
    {src:'assets/gallery/13.jpg'},
    {src:'assets/gallery/14.jpg'},
    {src:'assets/gallery/15.jpg'},
  ]
}
