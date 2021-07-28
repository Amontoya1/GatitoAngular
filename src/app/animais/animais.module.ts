import { ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from './../component/mensagem/mensagem.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimalComponent } from './animal/animal.component';
import { DetalheAnimalComponent } from './detalhe-animal/detalhe-animal.component';
import { GradePhotosComponent } from './grade-photos/grade-photos.component';
import { ListaAnimaisComponent } from './lista-animais/lista-animais.component';
import { CardModule } from '../component/card/card.module';
import { AnimaisRoutingModule } from './animais-routing.module';
import { ComentariosComponent } from './detalhe-animal/comentarios/comentarios.component';
import { NovoAnimalComponent } from './novo-animal/novo-animal.component';



@NgModule({
  declarations: [
    AnimalComponent,
    DetalheAnimalComponent,
    GradePhotosComponent,
    ListaAnimaisComponent,
    ComentariosComponent,
    NovoAnimalComponent
  ],
  imports: [
    CommonModule,
    AnimaisRoutingModule,
    CardModule,
    MensagemModule,
    ReactiveFormsModule
  ]
})
export class AnimaisModule { }
