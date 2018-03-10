
import { Component,Input} from '@angular/core';

@Component({
      selector:'mensagem',
      template: `<p class='alert alert-info' *ngIf="texto">{{texto}}</p>`     
})
export class MensagemComponent{
    private _texto = '';
    @Input() tempo = 2000;

    
    get texto(){
        return this._texto;
    }

    @Input()
    set texto(texto){
        this._texto = texto;
        setTimeout(() => {
            this._texto = ''; 
        }, this.tempo);
    }


    
}
