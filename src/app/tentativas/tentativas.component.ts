import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { Coracao } from './../Shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrls: ['./tentativas.component.scss']
})
export class TentativasComponent implements OnInit, OnChanges {

  @Input() public tentativas: number;

  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ];

  constructor() {
  }

  ngOnInit() {
    
  }

  ngOnChanges(){
    if(this.tentativas !== this.coracoes.length){
      let indice = this.coracoes.length - this.tentativas;

      this.coracoes[indice - 1].cheio = false;
    }
  }

}
