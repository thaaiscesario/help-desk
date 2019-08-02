import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-botao',
  templateUrl: './botao.component.html',
  styleUrls: ['./botao.component.scss']
})
export class BotaoComponent implements OnInit {
  

  @Input() texto; //coloca dados
  // @Input('t-descricao') descricao;
  //      apelido   variavel

  @Output() click=new EventEmitter(); // exporta dados
  constructor() { }

  ngOnInit() {
  }
  clickouNoBotao(){
    console.log("clickou");
    this.click.emit('AAA'); // ele emite  que foi clicado(eventoa) e 
    //precisa do output
    }

}
