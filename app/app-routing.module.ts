import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { GuardGuard } from './servicios/guard.guard';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';

const routes: Routes = [
  {path: "portfolio", component:PortfolioComponent, },// canActivate: [GuardGuard] agregar dentro de llave// 
  {path: "login", component:IniciarSesionComponent},
  {path: "", redirectTo:"portfolio", pathMatch:"full"},
  {path: "educacion", component:EducacionComponent},
  {path: "experiencia", component:ExperienciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
