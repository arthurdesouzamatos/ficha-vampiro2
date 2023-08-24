import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Observable, BehaviorSubject } from 'rxjs';
import { VampiroPontoEnum } from '../commons/vampiro-ponto-enum';

@Component({
  selector: 'vampiro-pontos',
  templateUrl: './pontos.component.html',
  styleUrls: ['./pontos.component.scss']
})
export class PontosComponent implements OnInit {

  @Input()
  ehAtributo: boolean = false;

  @Input()
  public tipo: VampiroPontoEnum = VampiroPontoEnum.PADRAO;
  
  public readonly LIMITE_MAXIMO = 10;

  public readonly LIMITE_MINIMO = 5;

  pontos: Array<Preenchimento> = [];

  public ehPermitidoAddPonto = true;

  public ehPermitidoDelPonto = true;

  ngOnInit(): void {
    if (this.ehAtributo) {

      this.pontos = [Preenchimento.BOLINHA_PREENCHIDA, Preenchimento.BOLINHA_VAZIA, Preenchimento.BOLINHA_VAZIA, Preenchimento.BOLINHA_VAZIA, Preenchimento.BOLINHA_VAZIA];

    }
    else {
      this.pontos = [Preenchimento.BOLINHA_VAZIA, Preenchimento.BOLINHA_VAZIA, Preenchimento.BOLINHA_VAZIA, Preenchimento.BOLINHA_VAZIA, Preenchimento.BOLINHA_VAZIA];

    }
  }

  public verificarPermissaoAddPonto() {
    let devePermitirAddPonto;

    if (devePermitirAddPonto) {
      this.ehPermitidoAddPonto = true;
      return;
    }

    // this.ehPermitidoAddPonto = false;
  }
  
  public verificarPermissaoDelPonto() {
    let DevePermitirDelPonto;

    if (DevePermitirDelPonto) {
      this.ehPermitidoDelPonto = true;
      return;
    }

    // this.ehPermitidoDelPonto = false;
  }

  public selecionarBola(posicaoBola: number) {
    let bolaEstaVazia: boolean = this.pontos[posicaoBola] == Preenchimento.BOLINHA_VAZIA;


    if (posicaoBola == 0 && this.ehAtributo) {
      posicaoBola = 1;
    }
    if (bolaEstaVazia) {
      for (let index = 0; index <= posicaoBola; index++) {
        this.pontos[index] = Preenchimento.BOLINHA_PREENCHIDA;
      }
    }
    else {
      for (let index = this.pontos.length-1; index >= posicaoBola; index--) {
        this.pontos[index] = Preenchimento.BOLINHA_VAZIA;
      }
    }
  }

  public adicionarPonto(): void {
    let ehPontoLimiteMaximo:boolean = this.pontos.length >= this.LIMITE_MAXIMO;
    if (ehPontoLimiteMaximo) {
      return;
    }

    this.pontos.push(Preenchimento.BOLINHA_VAZIA);
  }

  public apagarPonto():void{
    let ehPontoLimiteMinimo:boolean = this.pontos.length <= this.LIMITE_MINIMO;
    if(ehPontoLimiteMinimo){
      return;
    }
    this.pontos.pop();
  }

  
//   public permiteAddBotao():boolean{
    
//   if(this.pontos.length < this.LIMITE_MAXIMO && this.pontos[this.pontos.length -1] == Preenchimento.BOLINHA_PREENCHIDA){
//     return; 
//   } 
// }
// public permiteDelBotao():void{
//   if(this.pontos.length > this.LIMITE_MINIMO){
//   } 
// }

 }

export enum Preenchimento {

  BOLINHA_VAZIA = 'bi bi-circle',
  BOLINHA_PREENCHIDA = 'bi bi-circle-fill'

}