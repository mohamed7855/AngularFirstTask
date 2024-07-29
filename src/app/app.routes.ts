import { GalleryComponent } from './components/gallery/gallery.component';
import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, title: 'Home', pathMatch: 'full' },
  { path: 'about', component: AboutComponent, title: 'About' , pathMatch: 'full'},
  { path: 'portfolio', component: PortfolioComponent, title: 'Portfolio' , pathMatch: 'full'},
  { path: 'gallery', component: GalleryComponent, title: 'Gallery' , pathMatch: 'full'},
  { path: 'contact', component: ContactComponent, title: 'contact' , pathMatch: 'full'},
  { path: '**', component: NotFoundComponent, title: 'NotFound' },
];
