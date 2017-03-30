import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from '../components/app.component';
import { Navbar } from '../components/navbar/navbar.component';
import { Jumbotron } from '../components/jumbotron/jumbotron.component';
import { FooterPokemon } from '../components/footer/footer.component';

import { PokeapiService } from '../services/pokeapi.service';

import { ImageHeight } from '../pipes/image-height.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ImageHeight,
    Navbar,
    Jumbotron,
    FooterPokemon
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [PokeapiService],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
