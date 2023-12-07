import { Component } from '@angular/core';
import {  FormsModule } from "@angular/forms"

@Component({
  selector: 'app-exo4',
  standalone: true,
  imports: [ FormsModule ],
  templateUrl: './exo4.component.html',
  styleUrl: './exo4.component.css'
})
export class Exo4Component {
  public pays : string = "";

}
