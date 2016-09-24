import {Directive, ElementRef, Renderer} from "angular2/core"

@Directive({
  selector: "[autoGrow]",
  host : {
    "(focus)" : "onFocus()",
    "(blur)"  : "onBlur()"
  }
})

export class AutoGrowDirective{
  constructor(private er : ElementRef, private r : Renderer) {

  }

  onFocus() {
    this.r.setElementStyle(this.er.nativeElement, "width", "300");
  }

  onBlur() {
    this.r.setElementStyle(this.er.nativeElement, "width", "100");
  }
}