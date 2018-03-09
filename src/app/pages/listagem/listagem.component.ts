import { Component} from '@angular/core';
import { FotoService} from '../../shared/foto/foto.service';
import { FlashMessage } from '../../utils/flashMessage.service';

@Component({
  templateUrl: './listagem.component.html'
})
export class ListagemComponent {
  fotos = [];
  title = 'Caelum pic';
  service:FotoService;
  mensagem= '';
  flashMessage:FlashMessage;

  constructor(service:FotoService, flashMessage:FlashMessage){
    this.service = service;
    this.flashMessage = flashMessage;
    this.mensagem = flashMessage.get('Cadastro');
    this.listar();
  }

  listar(){
    this.service.listar()
    .subscribe(fotos=>{
      this.fotos=fotos; 
    });
  }


  remover(foto){
    this.service.remove(foto).
    subscribe(
    ()=>{
      this.mensagem = 'Foto removida com sucesso';
      this.fotos = this.fotos.filter(f=>f._id != foto._id);

    },
    ()=>{ 
      this.mensagem = 'Ocorreu um erro ao remover a foto';
    });
  } 
  

}
