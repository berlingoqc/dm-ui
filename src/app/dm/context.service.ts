import { Injectable } from '@angular/core';

export class ContextService<T> {

  private innerContext: T;

  constructor(private name: string) {

  }

  get context(): T {
    if (!this.innerContext) {
      const str = localStorage.getItem(this.name);
      if (str && str !== 'undefined') {
        this.innerContext = JSON.parse(str);
      } else {
        return {
          settings: {}
        } as any;
      }
    }
    return this.innerContext;
  }

  set context(ctx: T) {
    this.innerContext = ctx;
    localStorage.setItem(this.name, JSON.stringify(this.innerContext));
  }
}
