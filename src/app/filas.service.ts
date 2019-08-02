import { Injectable } from '@angular/core';
import {Fila} from './model/filas';
@Injectable({
  providedIn: 'root'
})
export class FilasService {
  filas : Fila[] = [{ id: 1, nome: 'Telefonia', ativo: true, slug: "telefonia"},
                    { id: 2, nome: 'Computadores', ativo: true, slug:"computadores"},
                    { id: 3, nome: 'Redes', ativo: false, slug:"redes"},
                    { id: 4, nome: 'Infra', ativo: false, slug:"infra"},
                    { id: 5, nome: 'Cozinha', ativo: false, slug:"cozinha"}
  ];
  constructor() { }



  //Metodo que retorna o array da mesma classe (filas [])
  public getFilas(): Fila[] { //get é do tipo Fila[] e tem um retorno
    
    //function ()--callback - função anonima que tem parametro(metodo principal chamando outro metodo)
    return this.filas.filter((item) => item.ativo === true
      //OUTRA FORMA   
      //return this.filas.filter(function (item) {
      //return item.ativo === true; }
    );
  }

  public adicionarFila(itemFila : Fila): void{
    itemFila.ativo = true;
    this.filas.push(itemFila);
    
  }
  nextId(): number{
    let id: number;
    id = this.filas.length + 1;

    return id;

  }
}
