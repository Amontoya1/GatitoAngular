import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';
import { UsuarioService } from 'src/app/autenticacao/usuario/usuario.service';

@Component({
  selector: 'gat-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent  {

  user$ = this.usuarioService.retornaUsuario();

  constructor(
    private usuarioService: UsuarioService,
    // private router: Route
  ) { }

  logout() {
    this.usuarioService.logout();
    // this.router.navigate(['']);
   
  }

}
