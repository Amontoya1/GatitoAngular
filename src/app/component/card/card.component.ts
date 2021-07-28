import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'gat-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() titulo = '';
  constructor() { }

  ngOnInit(): void {
  }

}
