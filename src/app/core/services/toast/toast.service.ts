import {
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  EmbeddedViewRef,
  Injectable,
  Injector, Renderer2, RendererFactory2,
} from '@angular/core';
import {Toast} from '@app/shared/models/toast.model';
import {ToastComponent} from '@app/shared/components/toast/toast.component';
import {TOAST_DELAY} from '@app/shared/utils/utils.constants';

@Injectable({
  providedIn: 'root'
})
/**
 * The service for generate the toast notification
 * @author: Thomas DOURLENS
 */
export class ToastService {

  /**
   * The array of toast components
   */
  private toastComponentRef = [];

  /**
   * The toast container is a parent of all toast
   */
  private toastContainer = null;
  private renderer: Renderer2;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private appRef: ApplicationRef,
              private rendererFactory: RendererFactory2,
              private injector: Injector) {
    // For access on renderer in service
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  /**
   * Show the toast
   * @param params : equal ToastModel
   */
  public show(params: Toast): void {
    // Check if toast no exist
    if (!this.toastExist(params)) {

      // If no exist create the toast element
      const componentRef = this.createToast(params);
      const toastHtml = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0];

      // Check if toast container exist
      (!this.toastContainer)
        ? this.createToastContainer(toastHtml) // if no create, create and append the toast
        : this.renderer.appendChild(this.toastContainer, toastHtml); // else append toast in container

      // Add the ref of component in remember
      this.toastComponentRef.push(componentRef);
      // Remove the component after the time of TOAST_DELAY + animate time of component when it close
      setTimeout(() => this.removeToast(componentRef), TOAST_DELAY + 400);
    }
  }

  /**
   * Check if the same toast exist in array
   * @param message
   * @param keyMessage
   */
  private toastExist({message, keyMessage}: Toast): boolean {
    return this.toastComponentRef.some(({instance}) => {
      return instance.toast.message === message && instance.toast.keyMessage === keyMessage;
    });
  }

  /**
   * Create the toast with params,
   * @param params
   */
  private createToast(params: Toast): ComponentRef<ToastComponent> {

    // Create a component
    const component = this.componentFactoryResolver.resolveComponentFactory(ToastComponent);
    const componentRef = component.create(this.injector);

    // Send the params for @Input() of value toast
    componentRef.instance.toast = params;

    // And link the component at the view
    this.appRef.attachView(componentRef.hostView);

    // Then return the toast on format HTML
    return componentRef;
  }

  /**
   * Remove a toast component
   * @param component
   */
  private removeToast(component: ComponentRef<ToastComponent>): void {
    // Detach the component of view
    this.appRef.detachView(component.hostView);

    // Remove the component of the toast array
    this.toastComponentRef = this.toastComponentRef.filter(el => (el !== component));

    // if toast array is empty, remove the container of toast
    if (this.toastComponentRef.length === 0) {
      const toastContainer = document.getElementsByClassName('toast-container')[0];
      this.renderer.removeChild(document.body, toastContainer);
      this.toastContainer = null;
    }

    // For finish destroy the toast component
    component.destroy();
  }

  /**
   * Create a parent element for contain all toast
   * @param toastHtml
   */
  private createToastContainer(toastHtml: HTMLElement): void {

    // Create the toast container
    this.toastContainer = this.renderer.createElement('div');
    this.toastContainer.className = 'toast-container';

    // Append the toast element inside then append in body
    this.renderer.appendChild(this.toastContainer, toastHtml);
    this.renderer.appendChild(document.body, this.toastContainer);
  }
}
