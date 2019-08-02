import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-criar-chamado-reactive',
  templateUrl: './criar-chamado-reactive.component.html',
  styleUrls: ['./criar-chamado-reactive.component.scss']
})
export class CriarChamadoReactiveComponent implements OnInit {
  chamadoForm: FormGroup;
  numberPattern = /^[0-9]*$/;
  constructor(private formBuilder: FormBuilder) { }
  
  ngOnInit() {
    this.chamadoForm = this.formBuilder.group({
      // id: this.formBuilder.control('Problemas com o PC'),
      id: this.formBuilder.control('', [Validators.pattern(this.numberPattern)]),
      desc: this.formBuilder.control('', [Validators.required,
                                          Validators.minLength(5),
                                          Validators.maxLength(9),
                                          Validators.pattern(this.numberPattern)
                                      ])
    })
  }

  public salvar (){
    console.log(this.chamadoForm);
  }
}
