import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// PrimeNg
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
import { BadgeModule } from 'primeng/badge';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ListagemProdutoComponent } from './componentes/listagem-produtos/listagem-produto.component';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ToolbarModule } from 'primeng/toolbar';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { DividerModule } from 'primeng/divider';
import { BarraSuperiorComponent } from './componentes/barra-superior/listagem-produtos/barra-superior.component';
import { MenubarModule } from 'primeng/menubar';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { ListagemProdutoPromocaoDiaComponent } from './componentes/listagem-produtos-promocao-dia/listagem-produto-promocao-dia.component';
import { SidebarModule } from 'primeng/sidebar';
import { DataViewModule } from 'primeng/dataview';
import { RatingModule } from 'primeng/rating';

const primeNG = [
  ButtonModule,
  MenuModule,
  BadgeModule,
  BrowserAnimationsModule,
  CarouselModule,
  TagModule,
  ToolbarModule,
  AvatarModule,
  AvatarGroupModule,
  DividerModule,
  MenubarModule,
  CardModule,
  InputTextModule,
  SidebarModule,
  DataViewModule,
  RatingModule
]



@NgModule({
  declarations: [
    AppComponent,
    ListagemProdutoComponent,
    BarraSuperiorComponent,
    ListagemProdutoPromocaoDiaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    primeNG,
    CommonModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
