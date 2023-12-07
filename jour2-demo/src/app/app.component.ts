import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { Premier } from "./premier.component"
import { Deuxieme } from "./deuxieme.component" // déclaration
import { Exo1 } from "./exo1.component"

@Component({
  selector: 'app-root', // associer au composant une balise html => index.html 
  standalone: true,
  imports: [CommonModule, RouterOutlet , Premier , Deuxieme , Exo1 ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'jour2-demo';
}