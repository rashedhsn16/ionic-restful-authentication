import {Injectable} from '@angular/core';
import {Platform} from 'ionic-angular';

/*
  Generated class for the SplitPane provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SplitPane {
  splitPaneState : boolean;
  constructor(public platform : Platform) {
    this.splitPaneState = false;
  }

  getSplitPane() {
    if (localStorage.getItem('userData')) {

      if (this.platform.width() > 992) {
        
        this.splitPaneState = true;
      } else {
        this.splitPaneState = false;
      }

    } else {
      this.splitPaneState = false;
    }

    return this.splitPaneState;
  }

}
