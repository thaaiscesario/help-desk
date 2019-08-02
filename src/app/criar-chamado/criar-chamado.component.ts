import { Component, OnInit } from '@angular/core';
import { ChamadosService } from '../chamados.service';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-chamado',
  templateUrl: './criar-chamado.component.html',
  styleUrls: ['./criar-chamado.component.scss']
})
export class CriarChamadoComponent implements OnInit {
  id: number;
  descricao: string;
  status: string;
  dataAbertura: string;
  dataFechamento: string;
  descricaoFinalizacao: string;
  idFila: number;


  chamadoForm: FormGroup;
  numberPattern = /^[0-9]*$/;
  constructor(private chamado: ChamadosService,
  private location : Location,
  private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.chamadoForm = this.formBuilder.group({
      // id: this.formBuilder.control('Problemas com o PC'),
      id: this.formBuilder.control('', [Validators.pattern(this.numberPattern)]),
      descreicao: this.formBuilder.control('', [Validators.required,
                                          Validators.minLength(5),
                                          Validators.maxLength(9),
                                          Validators.pattern(this.numberPattern)
                                      ])
    })
  }

  adicionarChamado() {
    this.chamado.adicionarChamado({ id: this.id, descricao: this.descricao,
                                    status: this.status, dataAbertura: this.dataAbertura,
                                    dataFechamento: this.dataFechamento,
                                    descricaoFinalizacao : this.descricaoFinalizacao,
                                    idFila: this.idFila });
  }
  public voltar (){
    this.location.back();
  }

}
