import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gat-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  mostraMenu = false;

  constructor() { }

  ngOnInit(): void {
  }

  abreMenu(){
    this.mostraMenu = !this.mostraMenu;
  }
}
