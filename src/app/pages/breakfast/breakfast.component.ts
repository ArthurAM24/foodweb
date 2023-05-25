import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  constructor() { }
  public imagenB1: string = 'https://i.postimg.cc/Y02JnNM4/b1.png';
  public imagenB2: string = 'https://i.postimg.cc/9FM6yBLK/b2.png';
  public imagenB3: string = 'https://i.postimg.cc/66Ys7PfC/b3.png';
  public imagenB4: string = 'https://i.postimg.cc/PJ60BL5S/b4.png';
  public imagenB5: string = 'https://i.postimg.cc/zGH4cGZk/b5.png';
  public imagenB6: string = 'https://i.postimg.cc/TY4Z0WSw/b6.png';
  ngOnInit(): void {
  }

}
