import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { Premier } from "./premier.component"
import { Deuxieme } from "./deuxieme.component" // déclaration

@Component({
  selector: 'app-root', // associer au composant une balise html => index.html 
  standalone: true,
  imports: [CommonModule, RouterOutlet , Premier , Deuxieme ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',

})
export class AppComponent {
  title = 'jour2-demo';
}
