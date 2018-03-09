import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { CadastroComponent } from "./cadastro.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { UtilsModule } from "../../utils/utils.module";
import { cadastroRoutingModule } from "./cadastro.routing.module";

@NgModule({
    declarations:[CadastroComponent],
    imports:[
        FormsModule,
        ReactiveFormsModule,
        CommonModule,
        SharedModule,
        UtilsModule,
        cadastroRoutingModule]
})
export class CadastroModule{

}