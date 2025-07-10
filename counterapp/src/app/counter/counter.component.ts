import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'
@Component({
  selector: 'app-counter',
  imports: [CommonModule,FormsModule],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css'
})
export class CounterComponent {
  showme=false;
}
  // objects=[
  //   "react",
  //   "angular",
  //   "full stack development",
  //   "data science",
  //   "python",
  //   "java"
  // ]

    //  count=0;
    //  Increment()
    //  {
    //   this.count++;
    //  }
    //  Decrement()
    //  {
    //   if(this.count>0)
    //     {
      
    //   this.count--;
    //     }
    //  }

