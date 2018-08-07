import { Component } from '@angular/core';
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  valorAtual: string;
  valorSalvo: string;

  isMouseOver: boolean = false;

  nomeDoCurso: string = 'Angular';

  valorInicial: number = 15;

  valor: number = 5;

  deletarCiclo: boolean = false;

  

  botaoClick(){
    console.log("botão clicado");
    alert("Botão Clicado!");
  }
  onKeyUp(evento: KeyboardEvent){
    console.log((<HTMLInputElement>evento.target).value);
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  salvarValor(valor){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  onMudouValor(evento){
    console.log(evento.novoValor);
  }

  mudarValor(){
    this.valor++;
  }

  destruirCiclo(){
    this.deletarCiclo = true;
  }
}

