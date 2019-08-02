import { Component, OnInit } from '@angular/core';
import { FilasService } from '../filas.service';

@Component({
  selector: 'app-filas',
  templateUrl: './filas.component.html',
  styleUrls: ['./filas.component.scss']
})
export class FilasComponent implements OnInit {
  //VARIAVEIS


  

  // criar a variavel filas que recebe a classe FilaService 
  //importa a classe FilasService
  //colocamos private 
  constructor(private filas: FilasService) {
  }

  ngOnInit() {
  }

  public leiaDaFila(){
    return this.filas.getFilas();
  }
  
  public incluirNaFila (){
    alert("você quer incluir na fila");
  }

}
