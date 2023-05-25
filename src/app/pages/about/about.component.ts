import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 
  public imagenNosotros: string = 'https://i.postimg.cc/zvPPx9xM/nosotros.png';
  constructor() { }

  ngOnInit(): void {
  }

}
