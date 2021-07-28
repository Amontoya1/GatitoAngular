import { Component, Input, OnInit } from '@angular/core';
import { Animais } from '../animais';

@Component({
  selector: 'gat-grade-photos',
  templateUrl: './grade-photos.component.html',
  styleUrls: ['./grade-photos.component.scss']
})
export class GradePhotosComponent implements OnInit {
  @Input() animais!: Animais;
  constructor() { }

  ngOnInit(): void {
  }

}
