import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos = [
    {
      nome: 'Alura',
      cursos : [
        {
          nome: 'React',
          cursosArray: ['React: desenvolvendo com JavaSript','React: escrevendo com TypeSript',
            'React: integrando seu projeto React com API´s']
        },
        {
          nome: 'Angular',
          cursosArray: ['Angular 14: aplique os conceitos e desenvolva seu primeiro CRUD', 'Angular 14: evoluindo a aplicação']
        },
        {
          nome: 'C#',
          cursosArray: ['C# parte 1: primeiros passos','C# parte 2: Entendendo a Orientação a Objetos',
            'C# parte 3: entendendo herança e interface', 'C# parte 4: Entendendo exceções']
        },
        {
          nome: 'Linux',
          cursosArray: ['Certificação Linux LPI Essentials parte 1: Evolution and Distributions',
            'Linux I: Conhecendo e utilizando o terminal','Linux II: programas, processos e pacotes']
        },
        {
          nome: 'Spring',
          cursosArray: ['Spring Boot 3: aplique boas práticas e projeta uma API Rest',
            'Spring Boot 3: desenvolva uma API Rest em Java']
        },
        {
          nome: 'HTML/CSS',
          cursosArray: ['HTML e CSS3 parte 1: crie sua página web', 'HTML e CSS3 parte 2: posicionamento, listas e navegação',
            'HTML e CSS3 parte 3: trabalhando com formulários e tabelas']
        }
      ]
    },
    {
      nome: 'Santander Bootcamp',
      cursos: [
        {
          nome: 'Santander Bootcamp 2023 - Fullstack Java+Angular',
          cursosArray: ['LifeCycle Hooks com Angular','Single Page Application com Angular',
            'Módulos Angular','Criando um Blog com Angular', 'Testes Unitários com JUnit',
            'Criando uma API REST Documentada com Spring Web e Swagger',
            'Adicionando Segurança a uma API REST com Spring Security', 'Explorando Padrões de Projetos na Prática com Java']
        }
      ]
    }
  ]

  tipoCurso = ''
  constructor(private route : ActivatedRoute) { }

  ngOnInit(): void {

    this.tipoCurso = this.route.snapshot.paramMap.get('nomeCurso')!
    if(this.tipoCurso == 'alura'){
      this.cursos = this.cursos.filter(curso => curso.nome == 'Alura')
    }
    else {
      this.cursos = this.cursos.filter(curso => curso.nome == 'Santander Bootcamp')
    }
  }

  setAnimation() {

  }
}
