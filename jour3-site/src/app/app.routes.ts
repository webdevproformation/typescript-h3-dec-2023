import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ArticlesComponent } from './articles/articles.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    { path : "" , component : AccueilComponent },
    { path : "articles" , component : ArticlesComponent},
    { path : "contact-us" , component : ContactComponent} 
];

// créer des routes => uri <=====> Composant (Controller dans Symfony )