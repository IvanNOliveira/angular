import { Component } from "@angular/core";
import { FotoComponent } from '../../shared/foto/foto.component';
import { FotoService } from "../../shared/foto/foto.service";
import { ActivatedRoute, Router } from "@angular/router";
import { FlashMessage } from "../../utils/flashMessage.service";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";



@Component({
    templateUrl: './cadastro.component.html'
})
export class CadastroComponent{
    foto:FotoComponent = new FotoComponent();
    private service:FotoService;
    private router:Router;
    mensagem = '';
    flashMessage:FlashMessage ;
    meuForm:FormGroup;

    constructor(service:FotoService,
        activatedRoute:ActivatedRoute,
        router:Router,
        flashMessage:FlashMessage,
        formBuilder:FormBuilder){
        this.service = service;
        this.router = router;
        this.flashMessage = flashMessage;
        
        this.meuForm = formBuilder.group({
            titulo:['',
                Validators.compose([
                    Validators.required,
                    Validators.minLength(3)
            ])],
            url:['',Validators.required],
            descricao:['',Validators.required]
        });
        activatedRoute.params.subscribe(({id})=>{
            if(id){
                this.service.buscaPorId(id).subscribe(foto =>{
                    this.foto = foto;
                });
            }
        });

    }

    salvar(){

        if(this.foto._id){

            this.service.
            atualiza(this.foto).
            subscribe(()=>{
                console.log(this.foto);
                this.mensagem = 'Foto '+this.foto.titulo+' alterada com sucesso';
                this.flashMessage.add('Cadastro',this.mensagem);
                this.meuForm.reset();
                this.router.navigate(['']);
            },err=>{
                console.log(err);
            });
        }else{
            this.service.
            salva(this.foto).
            subscribe(()=>{
                console.log(this.foto);
                this.meuForm.reset();
                this.mensagem = 'Foto incluida com sucesso';
            },err=>{
                console.log(err);
            });
        }
    }
}