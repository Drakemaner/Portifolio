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
      link: '#',
      tipo: 'Projeto'
    },
    {
      nome: 'Clone da Página PSN',
      foto: '/assets/GitHub.png',
      link: 'https://github.com/Drakemaner/PSN-Page',
      tipo: 'Projeto'
    },
    {
      nome: 'Blog Feito em Angular Santander Bootcamp',
      foto: '/assets/GitHub.png',
      link: 'https://github.com/Drakemaner/Blog_SantanderBootcamp_Angular',
      tipo: 'Projeto'
    },
    {
      nome: 'Cursos Alura',
      foto: '/assets/alura.jpg',
      link: '/cursos/alura',
      tipo: 'Cursos'
    },
    {
      nome: 'Santander Bootcamp',
      foto: '/assets/Santander Bootcamp.png',
      link: '/cursos/santanderBootcamp',
      tipo: 'Cursos'
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
