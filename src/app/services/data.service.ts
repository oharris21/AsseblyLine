import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class DataService {
  items: string[] = [];
  private itemSource = new BehaviorSubject(this.items);
  currentItem = this.itemSource.asObservable();

  constructor() { }

  receiveItem(item: string) {
    this.items.push(item);
    this.itemSource.next(this.items);
  }

}