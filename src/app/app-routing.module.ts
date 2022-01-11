import { OrcamentoComponent } from './pages/orcamento/orcamento.component';
import { DicasComponent } from './pages/dicas/dicas.component';
import { TrabalhosComponent } from './pages/trabalhos/trabalhos.component';
import { EstilosComponent } from './pages/estilos/estilos.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path:"",
  component:SobreComponent
},
{
  path:"sobre",
  component:SobreComponent
},
{
  path:"estilos",
  component:EstilosComponent
},
{
  path:"trabalhos",
  component:TrabalhosComponent
},
{
  path:"dicas",
  component:DicasComponent
},
{
  path:"orcamento",
  component:OrcamentoComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
