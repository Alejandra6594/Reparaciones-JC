import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';
import { ValoresComponent } from './pages/valores/valores.component';
import { CotizacionesComponent } from './pages/cotizaciones/cotizaciones.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { ComentariosComponent } from './pages/comentarios/comentarios.component';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { NavbarSpyComponent } from './components/navbar-spy/navbar-spy.component';
import { TarjetaValoresComponent } from './components/tarjeta-valores/tarjeta-valores.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeroComponent,
    HomeComponent,
    ValoresComponent,
    CotizacionesComponent,
    ContactoComponent,
    ComentariosComponent,
    CarrouselComponent,
    NavbarSpyComponent,
    TarjetaValoresComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
