import { Injectable } from "@angular/core";

const messages = new Map();

@Injectable()
export class FlashMessage{


    add (key:string , message:string){
        messages.set(key,message);
    }

    get(key:string){
        const message = messages.get(key);
        messages.delete(key);
        return message;
    }
}