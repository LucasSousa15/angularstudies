import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonServiceService } from '../../services/pokemon-service.service';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {


  name:string = "BULBASSAUR"
  attributesTypes:string[] = ['FIRE', 'FLY']

  constructor (
    private service: PokemonServiceService
  ) {}

  ngOnInit ():void {
    this.service.getPokemon("evee");
  }

}
