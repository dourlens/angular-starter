import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private translateService: TranslateService) {}

  ngOnInit(): void {
    const lang = 'fr';
    this.translateService.use(lang).toPromise().then(() => this.initApp());
  }

  private initApp() {}
}
