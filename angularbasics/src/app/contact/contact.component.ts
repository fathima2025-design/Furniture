import { Component } from '@angular/core';
import { LowframeComponent } from '../lowframe/lowframe.component';
import { FuniroComponent } from '../funiro/funiro.component';

@Component({
  selector: 'app-contact',
  imports: [LowframeComponent,FuniroComponent ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
image = '../../assets/bg1.png'
  
}

