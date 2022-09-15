import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HijoDosComponent } from './hijo-dos/hijo-dos.component';
import { HijoUnoComponent } from './hijo-uno/hijo-uno.component';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { PrimeroComponent } from './primero/primero.component';
import { SegundoComponent } from './segundo/segundo.component';

const rutasHijas: Routes = [
  { path: 'hijo-uno', component: HijoUnoComponent },
  { path: 'hijo-dos', component: HijoDosComponent },
];

const routes: Routes = [
  { path: 'primero/:id', component: PrimeroComponent, children: rutasHijas },
  { path: 'segundo', component: SegundoComponent },
  { path: '', redirectTo: 'segundo', pathMatch: 'full' },
  { path: '**', component: NoEncontradoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
