import { Component } from '@angular/core';
import {CommonModule} from "@angular/common"

@Component({
  selector: 'app-exo3',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './exo3.component.html',
  styleUrl: './exo3.component.css'
})
export class Exo3Component {
  public show : boolean = true ;
  public onClick(){
    this.show = !this.show ;
  }
}
