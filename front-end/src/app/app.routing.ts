import { ModuleWithProviders } from '@angular/core'
import { Routes, RouterModule } from '@angular/router';

import { MotosComponent } from './componentes/motos/motos.component';
import { CrearMotoComponent } from './componentes/crear-moto/crear-moto.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { ErrorComponent } from './componentes/error/error.component';
import { DetalleComponent } from './componentes/detalle/detalle.component';
import { EditarComponent } from './componentes/editar/editar.component';


const appRoutes: Routes = [
	{path: '', component: MotosComponent},
	{path: 'motos', component: MotosComponent},
	{path: 'crear-moto', component: CrearMotoComponent},
	{path: 'contacto', component: ContactoComponent},
	{path: 'moto/:id', component: DetalleComponent},
	{path: 'editar/:id', component: EditarComponent},
	{path: '**', component: ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
 
