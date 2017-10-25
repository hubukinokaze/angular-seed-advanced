import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  private status = new BehaviorSubject<string>('guest');
  public currentStatus = this.status.asObservable();

  constructor() {

  }

  public changeStatus(newStatus: string) {
    this.status.next(newStatus);
  }
}
