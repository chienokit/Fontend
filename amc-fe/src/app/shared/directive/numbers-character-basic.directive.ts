import {Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: 'input[numbersCharacterOnly]'
})
export class NumbersCharacterBasicDirective {

  constructor(private _el: ElementRef) { }

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initialValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initialValue.replace(/[^A-Za-z0-9-\/\\\_]*/g, '');
    if ( initialValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
