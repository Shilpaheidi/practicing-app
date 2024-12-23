import { Directive, ElementRef, HostListener, Input } from "@angular/core";

@Directive({
    selector:'[appHighlight]',
})

export class HighlightDirective {
    @Input() highlightColor = 'Yellow';

    constructor(private el:ElementRef){}
    @HostListener('mouseenter') onMouseEnter(){
        this.el.nativeElement.style.background =  this.highlightColor;
    }

    @HostListener('mouseleave') onMouseLeave(){
        this.el.nativeElement.style.background = '';
    }
}