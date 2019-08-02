import { Injectable } from '@angular/core';
import { Chamado } from './model/chamado';

@Injectable({
  providedIn: 'root'
})
export class ChamadosService {

  chamados : Chamado[]= [{id: 154,
                        descricao: "Internet não funciona",
                        status: "aberto",
                        dataAbertura: "2019-04-08",
                        dataFechamento: null,
                        descricaoFinalizacao:  null,
                        idFila: 2},
                        
                       {id: 245,
                        descricao: "Computador não liga",
                        status: "fechado",
                        dataAbertura: "2019-03-12",
                        dataFechamento: "2019-03-12",
                        descricaoFinalizacao: "Computador substituído",
                        idFila: 2},
                                                  
                       {id: 583,
                        descricao: "Telefone sem linha",
                        status: "aberto",
                        dataAbertura: "2019-07-10",
                        dataFechamento: null,
                        descricaoFinalizacao:  null,
                        idFila: 1},
                        
                       {id: 552,
                        descricao: "Notebook nao carrega",
                        status: "aberto",
                        dataAbertura: "2019-03-12",
                        dataFechamento: null,
                        descricaoFinalizacao: null,
                        idFila: 2},
                        
                       {id: 781,
                        descricao: "Computador não liga",
                        status: "aberto",
                        dataAbertura: "2019-03-12",
                        dataFechamento: null,
                        descricaoFinalizacao: null,
                        idFila: 2},

                        {id: 100,
                        descricao: "Telefone não recebe chamadas",
                        status: "aberto",
                        dataAbertura: "2019-03-12",
                        dataFechamento: null,
                        descricaoFinalizacao: null,
                        idFila: 1},              
                         
                      ]
  constructor() { }

  public getChamados(id_fila: number):Chamado[]{
    return this.chamados.filter((item) => item.idFila === id_fila);

  }

  public getDetalheChamados(id_chamado: number){
    //FILTER traz todos
    // return this.chamados.filter((item) => item.id === id_chamado);
    
    //FIND traz apenas o primeiro
    return this.chamados.find((item) => item.id === id_chamado);

  } 

  adicionarChamado(chamado: Chamado ):void{
    this.chamados.push(chamado);
  } 

}
