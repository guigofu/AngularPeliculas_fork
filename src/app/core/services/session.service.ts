import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  get logged(): boolean{
    return sessionStorage.getItem('logged') === 'true';
  }

  set logged(value: boolean){
    sessionStorage.setItem('logged', '' + value);
  }

  // para guardar objetos (debe ser como string) en sessionStorage
  // saveObject(obj: any){
  //   sessionStorage.setItem('key', JSON.stringify(obj));
  // }

  constructor() { }
}
