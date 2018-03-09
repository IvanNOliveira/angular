import { NgModule } from '@angular/core';
import { FotoComponent } from './foto/foto.component';
import { CommonModule } from '@angular/common';
import { PainelComponent } from './painel/painel.component';
import { FiltroPorTitulo } from './foto/foto.pipes';
import { FotoService } from './foto/foto.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    imports:[CommonModule,HttpClientModule],
    declarations:[FiltroPorTitulo,FotoComponent,PainelComponent],
    exports:[FiltroPorTitulo,FotoComponent,PainelComponent],
    providers:[FotoService]
})
export class SharedModule{

}