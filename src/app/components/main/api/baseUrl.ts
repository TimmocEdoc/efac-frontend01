import { InjectionToken } from '@angular/core'

export const baseUrl = new InjectionToken<string>('baseUrl', {
    providedIn: 'root',
    factory: () => 'https://efac-server01.herokuapp.com/api/'
  })