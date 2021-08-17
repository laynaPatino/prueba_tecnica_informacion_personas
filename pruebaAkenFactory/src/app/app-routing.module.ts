import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BandejaPersonasComponent } from './bandeja-personas/bandeja-personas.component';
import { GestionarPersonasComponent } from './gestionar-personas/gestionar-personas.component';

const routes: Routes = [
  { path: '', redirectTo: '/gestionar-personas', pathMatch: 'full' },
  { path: 'bandeja', component: BandejaPersonasComponent },
  { path: 'gestionar-personas', component: GestionarPersonasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
