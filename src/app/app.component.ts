import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'template-primeng';
  items: MenuItem[] | undefined;
  componentes = [
    { nome: "novo-produto", ativo: false }
  ]

  ngOnInit(): void {
    this.criarMenu();
  }



  ativarComponente() {

  }


  criarMenu() {
    this.items = [
      {
        label: 'Loja',
        items: [
          {
            label: 'Comprar',
            icon: 'pi pi-money-bill',
            command: () => {
            }
          },
          {
            label: 'Delete',
            icon: 'pi pi-times',
            command: () => {
            }
          }
        ]
      },
      {
        label: 'Administrador',
        items: [
          {
            label: 'Novo produto',
            icon: 'pi pi-plus',
            url: 'http://angular.io',
            command: () => {
              this.componentes.find(a=> a.nome == "novo-produto")
            }
          },
          {
            label: 'Router',
            icon: 'pi pi-upload',
            routerLink: '/fileupload'
          }
        ]
      }
    ];
  }
}
