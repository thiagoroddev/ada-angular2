import { Component } from '@angular/core';

@Component({
  selector: 'app-meu-primeiro-componente',
  templateUrl: './meu-primeiro-componente.component.html',
  styleUrl: './meu-primeiro-componente.component.css'
})
export class MeuPrimeiroComponenteComponent {

  public firstName: string = ''; 
  public lastName: string = ''; 
  actionButton () {
    this.firstName = 'Thiago';
    this.lastName = 'Rodrigues';
  }

  public year: number = 2024;
  add () {
    this.year++;
  }

  remove () {
    this.year--;
  }

}
