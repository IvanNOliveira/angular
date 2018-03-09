import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessage } from './flashMessage.service';

@NgModule({
    providers:[FlashMessage]
})
export class UtilsModule{

}