import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  public imagenM2: string = 'https://i.postimg.cc/s2FbdC3C/m1.jpg';
  public imagenM1: string = 'https://i.postimg.cc/5twTfKtY/m2.jpg';
  public imagenM3: string = 'https://i.postimg.cc/DZnD0QWC/m3.jpg';
  public imagenM4: string = 'https://i.postimg.cc/cCJbMsBw/m4.jpg';
  ngOnInit(): void {
  }

}
