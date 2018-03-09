import { ListagemComponent } from './pages/listagem/listagem.component';
import { Routes , RouterModule } from '@angular/router';



const routes:Routes=[
    {path:'', component:ListagemComponent},
    {path:'', loadChildren:'./pages/cadastro/cadastro.module#CadastroModule'},
    {path:'**', component:ListagemComponent}
];

export const appRoutes=RouterModule.forRoot(routes)