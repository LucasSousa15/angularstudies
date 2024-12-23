import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonServiceService } from '../../services/pokemon-service.service';
import { error } from 'console';
import { PokemonData } from '../../models/pokemonData';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  pokemon:PokemonData = {
    id:0,
    name:'',
    sprites:{
      front_default:''
    },
    types:[],
  } 


  constructor (
    private service: PokemonServiceService
  ) {}

  ngOnInit ():void { 
    this.getPokemon('pikachu')
  }

  getPokemon (searchName:string) {
    this.service.getPokemon(searchName).subscribe(
      {
        next:(res) => {

          this.pokemon = {
            id:res.id,
            name:res.name,
            sprites:res.sprites,
            types: res.types,
          }

        },
        error: (err) => console.log(err)
      }
    );

  }

}
