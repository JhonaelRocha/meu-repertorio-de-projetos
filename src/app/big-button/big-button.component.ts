import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-big-button',
  templateUrl: './big-button.component.html',
  styleUrls: ['./big-button.component.css']
})
export class BigButtonComponent {
    @Input()
    imagem:string = "";

    @Input()
    router_link:string = ";"

    constructor(){}
}
