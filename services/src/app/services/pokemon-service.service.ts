import { Injectable } from '@angular/core';
import { environment } from '../../environments/enviroment'
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  private baseURL:string = ""
  private pokeData: any = ''

  constructor(
    private http:HttpClient

  ) { 
    this.baseURL = environment.pokeApi
  }

  getPokemon (pokemonName:string ):Observable {
    this.pokeData = this.http.get(`${this.baseURL}${pokemonName}`)
    console.log(this.pokeData)
  }
}
