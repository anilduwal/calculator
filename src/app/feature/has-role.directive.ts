import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[hasRole]'
})
export class HasRoleDirective {

  @Input() set hasRole(role: string) {
    if (role === 'user') {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
    constructor(
      private templateRef: TemplateRef<any>,
      private viewContainer: ViewContainerRef
    ) { }
}
