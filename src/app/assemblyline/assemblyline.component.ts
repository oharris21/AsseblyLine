import { Component, Input, OnInit, OnDestroy } from "@angular/core";
import { DataService } from '../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: "assemblyline",
  templateUrl: "./assemblyline.component.html",
  styleUrls: ["./assemblyline.component.css"]
})

export class AssemblyLineComponent implements OnInit, OnDestroy {
  @Input() stages: string[] = [];
  subscription: Subscription = new Subscription;
  item: string = '';
  ideaItems: string[] = [];
  developmentItems: string[] = [];
  testingItems: string[] = [];
  deploymentItems: string[] = [];
  swimLanes: any[][] = [];

  constructor(private data: DataService) {}

  ngOnInit() {
    this.subscription = this.data.currentItem.subscribe(items => this.ideaItems = items);
    this.ideaItems.push(this.item);
    this.swimLanes = [this.ideaItems, this.developmentItems, this.testingItems, this.deploymentItems];
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  moveItemToTheRight(itemParam: string) {
    let swimLanesIndex = this.deleteItemFromSwimLane(itemParam);
    if (swimLanesIndex < this.swimLanes.length -1) { 
      this.swimLanes[swimLanesIndex +1].push(itemParam); 
    }
  }

  moveItemToTheLeft(itemParam: string) {
    let swimLanesIndex = this.deleteItemFromSwimLane(itemParam);
    if (swimLanesIndex > 0) { 
      this.swimLanes[swimLanesIndex -1].push(itemParam); 
    }
  }

  deleteItemFromSwimLane(itemParam: string): number {
    let swimLanesIndex = this.swimLanes.findIndex(item => item.includes(itemParam));
    let nestedArrayIndex = this.swimLanes[swimLanesIndex].indexOf(itemParam);
    this.swimLanes[swimLanesIndex].splice(nestedArrayIndex, 1);
    return swimLanesIndex;
  }

}