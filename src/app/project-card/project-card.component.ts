import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.css']
})
export class ProjectCardComponent {
    @Input()
    imagem:string = '';

    @Input()
    titulo:string = '';

    @Input()
    texto:string = '';

    @Input()
    link:string = '';

    @Input()
    pages_link:string= '';
}
