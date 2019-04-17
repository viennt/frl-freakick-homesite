import { Directive, ElementRef, OnInit, Input, Output, EventEmitter } from '@angular/core';

declare let paypal: any;

@Directive({
  selector: '[paypalCheckout]'
})
export class PaypalCheckoutButtonDirective implements OnInit {

  @Input() paymentId: number;
  @Output() onAuthorize: EventEmitter<any> = new EventEmitter();

  constructor(private el: ElementRef) {
    //
  }

  ngOnInit() {
    paypal.Button.render({
      env: 'sandbox', // Or 'sandbox'

      commit: true, // Show a 'Pay Now' button

      payment: () => {
        return this.paymentId;
      },

      onAuthorize: (data: any) => {
        this.onAuthorize.emit(data);
      }

    }, this.el.nativeElement);
  }
}
