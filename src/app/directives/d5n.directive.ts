import { Directive, Output, EventEmitter, OnInit, HostListener, ViewContainerRef, TemplateRef, Input } from '@angular/core';


@Directive({
  selector: '[appD5n]'
})
export class D5nDirective implements OnInit {

  private hasView = false;
  
  constructor(    
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef)  { }
  ngOnInit(): void {
    
  }
  @Output() someEvent: EventEmitter<any> = new EventEmitter();
  @Output() someOutEvent: EventEmitter<any> = new EventEmitter();

  @HostListener('mouseover') handleEvent(arg:any){this.someEvent.emit('Directive working');};
  @HostListener('mouseout') handleOutEvent(arg:any){this.someOutEvent.emit('Directive working');};
  
  @Input() set appUnless(condition: boolean) {
    if (!condition && !this.hasView) {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (condition && this.hasView) {
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}
