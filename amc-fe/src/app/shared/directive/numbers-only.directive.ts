import { Directive, ElementRef, EventEmitter, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: 'input[numbersOnly]'
})
export class NumbersOnlyDirective {
  @Input() maxValue = 99999999999;
  @Input() minValue = 0;
  @Input() isNegative = false;
  @Output() onMaxValue: EventEmitter<any> = new EventEmitter();
  private specialKeys: Array<string> = ['-'];


  constructor(private _el: ElementRef) {
  }

  @HostListener('input', ['$event']) onInputChange(event: any): void {
    const initialValue = this._el.nativeElement.value;
    if (this.isNegative) {
      this._el.nativeElement.value = initialValue.replace(/(?!^-)[^0-9]/g, '');
    } else {
      this._el.nativeElement.value = initialValue.replace(/[^0-9]*/g, '');
    }
    if (initialValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }
}
