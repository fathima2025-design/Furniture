import { Component } from '@angular/core';
import { HerosectionComponent } from '../../../furniture/herosection/herosection.component';
import { ProductComponent } from '../../../furniture/product/product.component';

@Component({
  selector: 'app-home',
  imports: [HerosectionComponent,ProductComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
