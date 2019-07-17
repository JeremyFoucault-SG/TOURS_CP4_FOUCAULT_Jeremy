import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NumeroComponent } from './numero/numero.component';
import { NewnumeroComponent } from './newnumero/newnumero.component';
import { TicketsComponent } from './tickets/tickets.component';
import { PresentationComponent } from './presentation/presentation.component';
import { GalerieComponent } from './galerie/galerie.component';
import { NewartistComponent } from './newartist/newartist.component';

const routes: Routes = [
  { path : '', component: HomeComponent},
  { path : 'numero', component: NumeroComponent},
  { path: 'newnumero', component: NewnumeroComponent},
  { path: 'galerie', component: GalerieComponent},
  { path: 'ticket', component: TicketsComponent},
  { path: 'presentation', component:PresentationComponent},
  { path: 'newartist', component:NewartistComponent},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
