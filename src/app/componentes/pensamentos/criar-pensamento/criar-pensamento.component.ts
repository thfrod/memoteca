import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css'],
})
export class CriarPensamentoComponent {
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo angular',
    modelo: 'modelo1',
    autoria: 'Thiago',
  };
  handleClickSave = () => alert('Thigas');
  handleClickCancel = () => alert('Cancelado!');
}
