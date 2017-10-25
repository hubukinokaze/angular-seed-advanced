import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
  public currentStatus: any;
  private status = new BehaviorSubject<string>('guest');

  constructor() {
    this.currentStatus = this.status.asObservable();
  }

  public changeStatus(newStatus: string) {
    this.status.next(newStatus);
  }
}
