import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiciosFormComponent } from './components/servicios-form/servicios-form.component';
import { ServiciosListComponent } from './components/servicios-list/servicios-list.component';
import { ServiciosService } from './services/servicios.service';
import { TipousuarioListComponent } from './components/tipousuario-list/tipousuario-list.component';
import { CardsComponent } from './components/cards/cards.component';
import { NavComponent } from './components/nav/nav.component';
import { FormPublicacionesComponent } from './components/form-publicaciones/form-publicaciones.component';
import { TipousuarioFormComponent } from './components/tipousuario-form/tipousuario-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiciosFormComponent,
    ServiciosListComponent,
    TipousuarioListComponent,
    CardsComponent,
    NavComponent,
    FormPublicacionesComponent,
    TipousuarioFormComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    ServiciosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
