import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FotoComponent } from './foto.component';


const API = 'http://localhost:3000/v1/fotos';
const headers = new HttpHeaders().set('Content-Type','application/json');
@Injectable()
export class FotoService{
    
    private http:HttpClient;

    constructor(http:HttpClient){
     this.http = http;
    }

    listar(){
        return this.http.get<any>(API); 
    }

    salva(foto){
        return this.http.post(API,foto,{headers}); 
    }

    remove(foto:FotoComponent){
        return this.http.delete(API+'/'+foto._id); 
    }

    atualiza(foto){
        return this.http.put(API+'/'+foto._id,foto,{headers}); 
    }

    buscaPorId(id:string){
        return this.http.get<FotoComponent>(API+'/'+id); 
    }
}
