import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {ToastService} from '@app/core/services/toast/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  constructor(private translateService: TranslateService,
              private toastService: ToastService) {
  }

  ngOnInit(): void {
    const lang = 'fr';
    this.translateService.use(lang).toPromise().then(() => this.initApp());
  }

  private initApp() {
    this.toastService.show({
      cssClass: 'warning',
      message: 'Je suis un message d\'alert',
      iconName: 'award'
    });
  }
}
