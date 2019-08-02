import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ChamadosService } from '../chamados.service';
import { Chamado } from '../model/chamado';

@Component({
  selector: 'app-detalhes-chamado',
  templateUrl: './detalhes-chamado.component.html',
  styleUrls: ['./detalhes-chamado.component.scss']
})
export class DetalhesChamadoComponent implements OnInit {
  dadosDoChamado : Chamado;
  constructor(private route: ActivatedRoute, 
              private chamados: ChamadosService) { 
    let id_chamado = this.route.snapshot.params['id'];
    console.log (id_chamado);
  }

  ngOnInit() {
    let id_chamado = this.route.snapshot.params['id'];
    this.lerDetalhes();
  }

  lerDetalhes(){
    let id_chamado = this.route.snapshot.params['id'];
    this.dadosDoChamado = this.chamados.getDetalheChamados(+id_chamado);
    console.log(this.dadosDoChamado);
  }
}
