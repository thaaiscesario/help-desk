import { Component, OnInit } from '@angular/core';
import { FilasService } from '../filas.service';

@Component({
  selector: 'app-criar-fila',
  templateUrl: './criar-fila.component.html',
  styleUrls: ['./criar-fila.component.scss']
})
export class CriarFilaComponent implements OnInit {
  
  nomeFila: string;

  constructor(private fila: FilasService) { }

  ngOnInit() {
  }
  adicionarFila() {

    console.log("nome: ", this.nomeFila);
    this.fila.adicionarFila({id:this.fila.nextId(), nome: this.nomeFila});

  }
}
