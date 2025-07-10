import { Component, Input } from '@angular/core';
import { ParentComponent } from "../parent/parent.component";

@Component({
  selector: 'app-child',
  imports: [ParentComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() message! :string;
}
