import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //Faux token d'identificationgit
  token: BehaviorSubject<string>; // Observable

  constructor() {
    this.token = new BehaviorSubject<string>('');
  }

  signIn(email: string, password: string): Promise<void | string> {
    // res => résoudre la promesse | rej => rejeter la promesse
    return new Promise((res, rej) => {
      setTimeout(() => {
        if (email === 'geralt@killingmonsters.com' && password === 'azerty') {
          this.token.next('azertyui');
          res();
        } else {
          rej('Les identifiants sont incorrects.');
        }
      }, 300);
    });
  }

  signOut(): Promise<void> {
    return new Promise<void>((res, rej) => {
      this.token.next('');
      res();
    });
  }
}
