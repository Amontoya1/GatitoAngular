import { SignUpComponent } from './../sign-up/sign-up.component';
import { SignInComponent } from './../sign-in/sign-in.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MensagemModule } from '../component/mensagem/mensagem.module';


@NgModule({
  declarations: [HomeComponent, SignInComponent, SignUpComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    MensagemModule,
    ReactiveFormsModule,
  ],
  exports: [HomeComponent],
})
export class HomeModule { }
