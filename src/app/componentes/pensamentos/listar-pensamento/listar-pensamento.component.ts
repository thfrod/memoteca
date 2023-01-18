import { Component } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.css'],
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      id: '1',
      conteudo: 'Aprendendo React',
      modelo: 'modelo1',
      autoria: 'Thiago',
    },
    {
      id: '2',
      conteudo: 'Aprendendo Angular',
      modelo: 'modelo2',
      autoria: 'Thiago',
    },
    {
      id: '3',
      conteudo: 'Aprendendo Vue',
      modelo: 'modelo3',
      autoria: 'Thiago',
    },
  ];
}
