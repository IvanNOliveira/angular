import { Routes, RouterModule } from "@angular/router";
import { CadastroComponent } from "./cadastro.component";


const routes:Routes=[
    {path:'cadastro',component:CadastroComponent},
    {path:'cadastro/:id',component:CadastroComponent}
] ;

export const cadastroRoutingModule = RouterModule.forChild(routes);