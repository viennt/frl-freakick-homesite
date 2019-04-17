import { Directive, ElementRef, OnChanges, Input } from '@angular/core';

@Directive({
  selector: '[loadingState]'
})

export class ButtonDirective implements OnChanges {
  @Input('loadingState') state: string;

  private loadingElement: any;

  constructor(private el: ElementRef) {
    this.loadingElement = document.createElement('I');
    let spaceElement = document.createElement('SPAN');
    spaceElement.innerHTML = ' ';
    this.el.nativeElement.appendChild(this.loadingElement);
    this.el.nativeElement.appendChild(spaceElement);
  }

  ngOnChanges(changes: any): any {
    if ('not-ready' === this.state) {
      this.notReadyState();
    } else if ('ready' === this.state) {
      this.readyState();
    } else if ('loading' === this.state) {
      this.loadingState();
    } else if ('finish' === this.state) {
      this.finishState();
    }
  }

  private notReadyState(): void {
    this.loadingElement.className = '';
    this.el.nativeElement.setAttribute('disabled', true);
  }

  private readyState(): void {
    this.loadingElement.className = '';
    this.el.nativeElement.removeAttribute('disabled');
  }

  private loadingState(): void {
    this.loadingElement.className = 'fa fa-spinner fa-spin';
    this.el.nativeElement.setAttribute('disabled', true);
  }

  private finishState(): void {
    this.loadingElement.className = 'fa fa-check';
    this.el.nativeElement.removeAttribute('disabled');
  }
}
