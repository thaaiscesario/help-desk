import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilasComponent } from './filas/filas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CriarFilaComponent } from './criar-fila/criar-fila.component';
import { AppRoutingModule } from './app-routing.module';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HeaderComponent } from './header/header.component';
import { ChamadosComponent } from './chamados/chamados.component';
import { DetalhesChamadoComponent } from './detalhes-chamado/detalhes-chamado.component';
import { BotaoComponent } from './botao/botao.component';
import { CriarChamadoComponent } from './criar-chamado/criar-chamado.component';
import { CriarChamadoReactiveComponent } from './criar-chamado-reactive/criar-chamado-reactive.component';
@NgModule({
  declarations: [
    AppComponent,
    FilasComponent,
    CriarFilaComponent,
    SobreNosComponent,
    NotFoundComponent,
    HeaderComponent,
    ChamadosComponent,
    DetalhesChamadoComponent,
    BotaoComponent,
    CriarChamadoComponent,
    CriarChamadoReactiveComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
