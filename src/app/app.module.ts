import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SobreComponent } from './pages/sobre/sobre.component';
import { EstilosComponent } from './pages/estilos/estilos.component';
import { TrabalhosComponent } from './pages/trabalhos/trabalhos.component';
import { DicasComponent } from './pages/dicas/dicas.component';
import { OrcamentoComponent } from './pages/orcamento/orcamento.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SobreComponent,
    EstilosComponent,
    TrabalhosComponent,
    DicasComponent,
    OrcamentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
