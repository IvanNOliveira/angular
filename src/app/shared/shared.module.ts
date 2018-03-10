import { NgModule } from '@angular/core';
import { FotoComponent } from './foto/foto.component';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel/painel.component';
import { FiltroPorTitulo } from './foto/foto.pipes';
import { FotoService } from './foto/foto.service';
import { HttpClientModule } from '@angular/common/http';
import { MensagemComponent } from './mensagem/mensagem.component';

@NgModule({
    imports:[CommonModule,HttpClientModule],
    declarations:[FiltroPorTitulo,FotoComponent,PainelComponent,MensagemComponent],
    exports:[FiltroPorTitulo,FotoComponent,PainelComponent,MensagemComponent],
    providers:[FotoService]
})
export class SharedModule{

}