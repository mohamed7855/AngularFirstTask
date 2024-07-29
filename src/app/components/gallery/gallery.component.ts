import { Component } from '@angular/core';
import { image } from '../../interfaces/image';
import { RecommendGalleryComponent } from "../recommend-gallery/recommend-gallery.component";

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RecommendGalleryComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  listImages:image[] = [
    {src:'assets/gallery/1.jpg'},
    {src:'assets/gallery/2.jpg'},
    {src:'assets/gallery/3.jpg'},
    {src:'assets/gallery/4.jpg'},
    {src:'assets/gallery/5.jpg'},
    {src:'assets/gallery/6.jpg'},
    {src:'assets/gallery/7.jpg'},
    {src:'assets/gallery/8.jpg'},
    {src:'assets/gallery/9.jpg'},
  ]
}
