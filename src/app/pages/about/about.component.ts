import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
 
  public imagenNosotros: string = '../../../assets/img/nosotros.png';
  constructor() { }

  ngOnInit(): void {
  }

}
