import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';


import { ListagemComponent } from './pages/listagem/listagem.component';
import { appRoutes } from './routes';
import { UtilsModule } from './utils/utils.module';

@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent
  ],
  imports: [
    UtilsModule,
    BrowserModule,
    SharedModule,
    appRoutes
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
