import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router"
import { FilasComponent } from './filas/filas.component';
import { CriarFilaComponent } from './criar-fila/criar-fila.component';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ChamadosComponent } from './chamados/chamados.component';
import { DetalhesChamadoComponent } from './detalhes-chamado/detalhes-chamado.component';
import { CriarChamadoComponent } from './criar-chamado/criar-chamado.component';
import { CriarChamadoReactiveComponent } from './criar-chamado-reactive/criar-chamado-reactive.component';


const routes: Routes = [ //Caminho da classe ts
    {path: 'filas', component:FilasComponent},
    {path: '', redirectTo: 'filas', pathMatch: 'full'},
    {path: 'criar-fila', component: CriarFilaComponent},
    {path: 'sobre', component: SobreNosComponent},
    {path: 'chamados/', component: ChamadosComponent},
    {path: 'reactive', component: CriarChamadoReactiveComponent},
    {path: 'chamados/criar-chamado', component: CriarChamadoComponent},
    {path: 'chamados/:id', component: ChamadosComponent},
    {path: 'chamados/detalhes/:id', component: DetalhesChamadoComponent},
    {path: '**', component: NotFoundComponent}
]
@NgModule(//Decorador que ajuda a colocar classe
    {
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    }
) 

export class AppRoutingModule{}