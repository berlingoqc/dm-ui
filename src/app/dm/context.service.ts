import { Injectable } from '@angular/core';
import { Context, BackendSettings } from './model/settings';

export abstract class ContextService<T> {

  private innerContext: T;

  constructor(private name: string) { }

  abstract getDefault();

  get context(): T {
    if (!this.innerContext) {
      const str = localStorage.getItem(this.name);
      if (str && str !== 'undefined') {
        this.innerContext = JSON.parse(str);
      } else {
        return this.getDefault();
      }
    }
    return this.innerContext;
  }

  set context(ctx: T) {
    this.innerContext = ctx;
    localStorage.setItem(this.name, JSON.stringify(this.innerContext));
  }
}


@Injectable({
  providedIn: 'root'
})
export class DMContextService extends ContextService<Context> {
  constructor() { super('dm'); }

  getDefault(): Context {
    return {
      selected_settings: -1,
      settings: []
    }
  }

  getDefaultBackend(): BackendSettings {
    return this.context.settings[this.context.selected_settings]
  }
}
