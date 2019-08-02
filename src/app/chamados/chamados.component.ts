import { Component, OnInit } from '@angular/core';
import { ChamadosService } from '../chamados.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-chamados',
  templateUrl: './chamados.component.html',
  styleUrls: ['./chamados.component.scss']
})
export class ChamadosComponent implements OnInit {

  constructor(private chamados : ChamadosService,
              private route : ActivatedRoute,
              private location : Location) { }

  ngOnInit() { //Toda vez que iniciar o componente executa as coisas dentro
    let id_categoria =this.route.snapshot.params['id'];//Serve para pegar as coisas da URL
    console.log(id_categoria);
  }

  leiaDosChamados(){
    let id_categoria =this.route.snapshot.params['id'];
    return this.chamados.getChamados(+id_categoria);
  }

  public voltar (){
    this.location.back();
  }
}
