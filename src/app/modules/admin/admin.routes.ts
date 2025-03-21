import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TematicasComponent } from './tematicas/tematicas.component';
import { ColoresComponent } from './colores/colores.component';
import { CuestionariosComponent } from './cuestionarios/cuestionarios.component';
import {MenuComponent} from './menu/menu.component';
import { InformePComponent } from './informe-p/informe-p.component';


export const adminRoutes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'colores', component: ColoresComponent },
  { path: 'tematicas', component: TematicasComponent },
  { path: 'cuestionario', component: CuestionariosComponent },
  { path: 'informe', component: InformePComponent },
  { path: 'menu', component: MenuComponent },
];
