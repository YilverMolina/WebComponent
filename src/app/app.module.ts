import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { createCustomElement } from '@angular/elements';

import { BzCardComponent } from './bz-card/bz-card.component';

@NgModule({
  declarations: [
    BzCardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [BzCardComponent],
  entryComponents: [
    BzCardComponent
  ]
})
export class AppModule {
  
  constructor(private injector: Injector) { }

  ngDoBootstrap() {
    const el = createCustomElement(BzCardComponent, { injector: this.injector });
    customElements.define('bzg-card', el);
  }
}
