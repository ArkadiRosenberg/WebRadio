import { Injectable } from '@angular/core';
import { Subject, Observable } from '../../../node_modules/rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  private subject = new Subject<any>()

  constructor() { }

  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  clearMessage() {
    this.subject.next();
  }

  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
