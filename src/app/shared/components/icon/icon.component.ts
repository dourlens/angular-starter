import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit {

  @Input() nameIcon: string; // Le nom du fichier SVG qui est (obligatoire)
  @Input() classIcon?: string[]; // Un tableau de class CSS (optionnel)
  @Input() stylesIcon?: object; // Un object contenant du style CSS (optionnel)

  public pathIcon = '/assets/icons/feather'; // le chemin du dossier content de nos icons

  ngOnInit() {
    // Lorsque le composant est initié on concatène le chemin avec le nom du fichier
    this.pathIcon += `/${this.nameIcon}.svg`;
  }
}
