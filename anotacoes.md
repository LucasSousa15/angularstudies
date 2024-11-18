# Anotações para fixacão

## Instalando a versão mais recente do Angular

    npm install -g @angular/cli

Para instalar uma versão anterior usamos
    npm install -g @angular/cli@numero.da.versao

Exemplo:
    npm install -g @angular/cli@14.4.1

## Iniciando um novo ambiente
    ng new nomeDoProjeto

## Importando as diretivas

Quando comecei meus estudos em Angular, já era necessário importar as diretivas, para fazer isso, basta importar a classe CommonModules no typescript que faz seus components herdarem as propriedades do Angular da seguinte forma:

    import { CommonModule  } from '@angular/common';

Não se esquecendo de importar a classe que foi herdada pra dentro do Decorator.
Abaixo temos um exemplo mais completo:

    import { Component } from '@angular/core';
    import { CommonModule  } from '@angular/common'; //Aqui herdamos a classe do nucleo do Angular

    @Component({
    selector: 'app-card',
    standalone: true,
    imports: [CommonModule], //Adicionamos a classe ao Array de imports.
    templateUrl: './card.component.html',
    styleUrl: './card.component.css'
    })
    export class CardComponent {

    }
