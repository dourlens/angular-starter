import {ComponentFactoryResolver, Directive, HostListener, Input, ViewContainerRef} from '@angular/core';
import {TooltipComponent} from '@app/shared/components/tooltip/tooltip.component';

@Directive({selector: '[appTooltip]'})
export class TooltipDirective {

  @Input() textTooltip;
  @Input() positionTooltip = 'bottom right';

  private tooltip;
  private readonly component;

  constructor(private componentFactoryResolver: ComponentFactoryResolver,
              private viewContainerRef: ViewContainerRef) {
    this.component = this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);
  }

  /**
   * When component with directive is hover,
   * Create and display component tooltip by sending :
   * - the text to display
   * - and the position (css class) of tooltip in relation to the parent
   */
  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.tooltip = this.viewContainerRef.createComponent(this.component);
    this.tooltip.instance.textTooltip = this.textTooltip;
    this.tooltip.instance.positionTooltip = this.positionTooltip;
    this.viewContainerRef.element.nativeElement.style.cursor = 'pointer';
    this.viewContainerRef.element.nativeElement.style.position = 'relative';
    this.viewContainerRef.element.nativeElement.appendChild(this.tooltip.location.nativeElement);
  }

  /**
   * When mouseleave a component with directive, else we destroy the tooltip
   */
  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.destroyTooltip();
  }

  private destroyTooltip(): void {
    this.viewContainerRef.clear();
  }
}
