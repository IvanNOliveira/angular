import {Pipe , PipeTransform} from '@angular/core';

@Pipe({
    name: 'filtroPorTitulo'
})
export class FiltroPorTitulo implements PipeTransform {
  
    transform(fotos:any[], digitado: string) {
        digitado = digitado.trim().toLowerCase();

        return fotos.filter(foto=> 
                foto.titulo.trim()
                .toLowerCase()
                .includes(digitado));
    }
}

