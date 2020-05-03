import {Component, Input, OnInit} from '@angular/core';
import {animate, style, transition, trigger} from '@angular/animations';
import {TOAST_DELAY} from '@app/shared/utils/utils.constants';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss'],
  animations: [
    trigger('animate-toggle', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('300ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ])
  ]
})

/**
 * The component TOAST Notification :
 * @author: Thomas DOURLENS
 */
export class ToastComponent implements OnInit {

  @Input() toast;
  public showToast: boolean;

  /**
   * When toast is generated, run timer for hide this one
   */
  ngOnInit() {
    this.showToast = true;
    setTimeout(() => this.showToast = false, TOAST_DELAY);
  }

  /**
   * Close toast
   */
  public closeToast(): void {
    this.showToast = false;
  }
}
