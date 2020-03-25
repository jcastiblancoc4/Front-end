import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { routing, appRoutingProviders } from './app.routing';


import { AppComponent } from './app.component';
import { MotosComponent } from './componentes/motos/motos.component';
import { CrearMotoComponent } from './componentes/crear-moto/crear-moto.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ErrorComponent } from './componentes/error/error.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { EditarComponent } from './componentes/editar/editar.component';

@NgModule({
  declarations: [
    AppComponent,
    MotosComponent,
    CrearMotoComponent,
    ContactoComponent,
    ErrorComponent,
    DetalleComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [
  appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
