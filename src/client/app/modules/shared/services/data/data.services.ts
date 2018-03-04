import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  public status;

  constructor() {
    this.status = new BehaviorSubject<string>('guest');
  }

  public getStatus() {
    return this.status.value;
  }

  public changeStatus(newStatus: string) {
    this.status.next(newStatus);
  }
}
