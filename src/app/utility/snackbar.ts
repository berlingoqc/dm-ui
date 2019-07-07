import { ServiceLocator } from './../locator.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

export function showMessagObservable<T>(obs: Observable<T>, format: (T) => string) {
  const service = ServiceLocator.injector.get(MatSnackBar);
  obs.subscribe(
    data => {
      service.open(format(data), 'X', {
        duration: 5000
      });
    },
    error => {
      service.open('Error ' + error, 'X', {
        duration: 5000
      });
    }
  );
}
