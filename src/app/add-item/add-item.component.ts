import { Component} from '@angular/core';
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {
  item: string = '';
  subscription: Subscription = new Subscription;

  constructor(private data: DataService) {}

  addItem(item: string) {
    this.data.receiveItem(item);
    this.item = '';
  }

}