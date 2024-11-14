import { Component, OnChanges, OnInit, SimpleChanges, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit, OnChanges {

  @Input () nome:String= ''

  constructor() {
    console.log(`Construtor ${this.nome}`)
  }

  //Define o comportamento da aplicação quand uma aplicação é alterada
  ngOnChanges(): void {
    console.log(`Essa propriedade é acionada quando acontece alguma alteração ${this.nome}`)
  }


  //Define o estado da aplicação ao iniciar
  ngOnInit(): void {
    this.nome = this.nome + "(check)"
    console.log(`O component nasce com o metodo OnInit ${this.nome}`)
  }



}
