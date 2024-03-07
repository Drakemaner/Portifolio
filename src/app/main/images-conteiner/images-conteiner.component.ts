import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-images-conteiner',
  templateUrl: './images-conteiner.component.html',
  styleUrls: ['./images-conteiner.component.css']
})
export class ImagesConteinerComponent implements OnInit {

  cards = [
    {
      nome: 'GitHub do Site',
      foto: '/assets/GitHub.png',
      link: 'https://github.com/Drakemaner/Portifolio',
      tipo: 'Projeto'
    },
    {
      nome: 'Cursos Alura',
      foto: '/assets/alura.jpg',
      link: '/cursos/alura',
      tipo: 'Cursos'
    },
    {
      nome: 'Blog Feito em Angular Santander Bootcamp',
      foto: '/assets/GitHub.png',
      link: 'https://github.com/Drakemaner/Blog_SantanderBootcamp_Angular',
      tipo: 'Projeto'
    },
    {
      nome: 'Santander Bootcamp',
      foto: '/assets/Santander Bootcamp.png',
      link: '/cursos/santanderBootcamp',
      tipo: 'Cursos'
    },
    {
      nome: 'Back-end do Clozet App (ASP.NET)',
      foto: '/assets/GitHub.png',
      link: 'https://github.com/Drakemaner/ClozetAPI',
      tipo: 'Projeto'
    },
    {
      nome: 'Clozet App (Angular/Ionic)',
      foto: '/assets/GitHub.png',
      link: 'https://github.com/Drakemaner/Clozet',
      tipo: 'Projeto'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
