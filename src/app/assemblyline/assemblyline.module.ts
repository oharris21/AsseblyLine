import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { AssemblyLineComponent } from "./assemblyline.component";

@NgModule({
  declarations: [AssemblyLineComponent],
  imports: [CommonModule],
  providers: [],
  exports: [AssemblyLineComponent]
})

export class AssemblyLineModule {}
