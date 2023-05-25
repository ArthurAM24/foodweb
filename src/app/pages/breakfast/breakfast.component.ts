import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.css']
})
export class BreakfastComponent implements OnInit {

  constructor() { }
  public imagenB1: string = '../../../assets/img/b1.png';
  public imagenB2: string = '../../../assets/img/b2.png';
  public imagenB3: string = '../../../assets/img/b3.png';
  public imagenB4: string = '../../../assets/img/b4.png';
  public imagenB5: string = '../../../assets/img/b5.png';
  public imagenB6: string = '../../../assets/img/b6.png';
  ngOnInit(): void {
  }

}
