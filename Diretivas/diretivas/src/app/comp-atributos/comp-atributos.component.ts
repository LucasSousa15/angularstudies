import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-comp-atributos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './comp-atributos.component.html',
  styleUrl: './comp-atributos.component.css'
})
export class CompAtributosComponent {
estilo: string = "enable"
trocar () {
  if (this.estilo === "enable") {
    this.estilo = "disable"
  } else{
    this.estilo = "enable"
  }
}
}