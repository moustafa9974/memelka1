import { Routes } from '@angular/router';
import { HomeComponent } from './pages/pages/home/home';
import { ProductsPageComponent } from './pages/pages/products/products';
import { AboutComponent } from './pages/pages/about/about';
import { ContactComponent } from './pages/pages/contact/contact';

export const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, data: { title: 'Home' } },
  { path: 'products', component: ProductsPageComponent, data: { title: 'Products' } },
  { path: 'about', component: AboutComponent, data: { title: 'About Us' } },
  { path: 'contact', component: ContactComponent, data: { title: 'Contact' } },
  { path: '**', redirectTo: '/home' }
];
