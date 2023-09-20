import { Component , Input } from '@angular/core';

@Component({
  selector: 'app-unity-project-card',
  templateUrl: './unity-project-card.component.html',
  styleUrls: ['./unity-project-card.component.css']
})
export class UnityProjectCardComponent {
    @Input()
    isDownload:boolean = true;

    @Input()
    isGitHub:boolean = true;

    @Input()
    download_link:string = "";

    @Input()
    github_link:string = "";

    @Input()
    image_1:string = "";
    @Input()
    image_2:string = "";
    @Input()
    image_3:string = "";
    @Input()
    image_4:string = "";

    @Input()
    titulo:string = "";
    @Input()
    texto:string = "";
    @Input()
    status:string = "";
    
}
