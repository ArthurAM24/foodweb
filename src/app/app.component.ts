import { Component, OnInit } from '@angular/core';
import ScrollReveal from 'scrollreveal';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  title = 'foodwebsite';

  ngOnInit() {
    const sr = ScrollReveal({
      distance: '100px',
      duration: 2000,
    });

    // Definir los elementos a animar
    sr.reveal('.home-text', { delay: 200, reset: true, origin: 'left' });
    sr.reveal('.home-img', { delay: 200, reset: true, origin: 'right' });

    const header = document.querySelector("header");
    const menu = document.querySelector('#menu-icon');
    const navbar = document.querySelector('.navbar');
    const searchIcon = document.querySelector('#search-icon');
    const searchForm = document.querySelector('#search-form');
    const closeBtn = document.querySelector('#close');

    if (header) {
      window.addEventListener("scroll", () => {
        header.classList.toggle("sticky", window.scrollY > 0);
      });
    }

    if (menu && navbar) {
      menu.addEventListener('click', () => {
        menu.classList.toggle('bx-x');
        navbar.classList.toggle('open');
      });

      window.addEventListener('scroll', () => {
        menu.classList.remove('bx-x');
        navbar.classList.remove('open');
      });
    }

    if (searchIcon && searchForm) {
      searchIcon.addEventListener('click', () => {
        searchForm.classList.toggle('active');
      });
    }

    if (closeBtn && searchForm) {
      closeBtn.addEventListener('click', () => {
        searchForm.classList.remove('active');
      });
    }
  }


}
