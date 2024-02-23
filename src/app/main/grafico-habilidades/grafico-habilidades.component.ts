import {
  AfterContentChecked,
  AfterViewInit,
  Component,
  Directive,
  ElementRef,
  NgZone,
  OnInit, QueryList,
  ViewChild, ViewChildren
} from '@angular/core';

@Component({
  selector: 'app-grafico-habilidades',
  templateUrl: './grafico-habilidades.component.html',
  styleUrls: ['./grafico-habilidades.component.css']
})

export class GraficoHabilidadesComponent implements OnInit, AfterViewInit {


  habilidadeArea = [
    {
      nome: 'Angular',
      nivel: 'width: 85%'
    },
    {
      nome: 'HMTL/CSS',
      nivel: 'width: 90%'
    },
    {
      nome: 'React',
      nivel: 'width: 60%'
    },
    {
      nome: 'Spring',
      nivel: 'width: 70%'
    },
    {
      nome: 'C#',
      nivel: 'width: 50%'
    },
  ]

  @ViewChildren('grafico') graficos!: QueryList<ElementRef>;
  @ViewChild('graficoLista') graficoLista!: ElementRef

  constructor(private ngzone : NgZone) { }

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry)=>{
        if(entry.isIntersecting){
          this.ngzone.run(()=> {
            this.graficos.forEach((grafico) => {
              grafico.nativeElement.classList.remove('graphic')
            })
            setTimeout(() => {
              this.graficos.forEach((grafico) => {
                grafico.nativeElement.classList.add('graphic')
              })
            }, 100);
          })
        }
      })
    })
    observer.observe(this.graficoLista.nativeElement)
  }

  ngOnInit(): void {

  }

}
