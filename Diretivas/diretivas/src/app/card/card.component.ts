import { Component, OnInit } from '@angular/core';
import { CommonModule  } from '@angular/common';


@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent  {
  produtos:string[] = []
  menuType:string = "user"


  constructor() {
    this.produtos = [
      "mouse",
      "teclado",
      "celular",

    ]
  }

  adicionar () {
    this.produtos.push("Miranha")
  }
  remover (index : number) {
    this.produtos.splice(index, 1)
  }

}
