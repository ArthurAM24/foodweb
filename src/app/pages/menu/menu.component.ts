import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  public imagenM2: string = '../../../assets/img/m2.jpg';
  public imagenM1: string = '../../../assets/img/m1.jpg';
  public imagenM3: string = '../../../assets/img/m3.jpg';
  public imagenM4: string = '../../../assets/img/m4.jpg';
  ngOnInit(): void {
  }

}
