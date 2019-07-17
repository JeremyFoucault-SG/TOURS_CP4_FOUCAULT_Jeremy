import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from "@angular/forms";
import { HttpClientModule,  HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NumeroComponent } from './numero/numero.component';
import { ModifnumeroComponent } from './modifnumero/modifnumero.component';
import { NewnumeroComponent } from './newnumero/newnumero.component';
import { ListArtistComponent } from './list-artist/list-artist.component';
import { TicketsComponent } from './tickets/tickets.component';
import { PresentationComponent } from './presentation/presentation.component';
import { GalerieComponent } from './galerie/galerie.component';
import { ModifresaComponent } from './modifresa/modifresa.component';
import { NewartistComponent } from './newartist/newartist.component';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NumeroComponent,
    ModifnumeroComponent,
    NewnumeroComponent,
    ListArtistComponent,
    TicketsComponent,
    PresentationComponent,
    GalerieComponent,
    ModifresaComponent,
    NewartistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot() 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
