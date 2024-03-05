import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

   eu = {
     nome : 'Guilherme Jenner',
     funcao : 'Desenvolvedor Full Stack',
     intro : 'Olá, Eu sou um Desenvolvedor Full Stack e este é um site que fiz para ser meu portfólio , sendo desenvolvido em Angular.',
     sobreMim:  'Olá! Sou um estudante de Sistemas de Informação na UVV, atualmente no 6° período. ' +
                'Tenho um forte apreço pela comunicação e sou reconhecido pelo meu esforço e dedicação. ' +
                'Trabalhar em equipe é uma das minhas habilidades mais destacadas, onde busco sempre contribuir de forma colaborativa e eficaz e ' +
                'estou constantemente buscando aprender e crescer, tanto academicamente quanto pessoalmente.',
     experiencia: 'Durante dois anos como estagiário no setor de Desenvolvimento e Suporte, ' +
                  'adquiri experiência significativa com tecnologias como Angular, Spring e SQL (MySQL). ' +
                  'Além disso, meu contato direto com os clientes na área de suporte proporcionou uma melhoria substancial em minhas habilidades de comunicação.'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
