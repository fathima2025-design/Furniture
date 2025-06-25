import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HerosectionComponent } from "../../furniture/herosection/herosection.component";
import { ProductComponent } from "../../furniture/product/product.component";
import { HeaderComponent } from '../../furniture/header/header.component';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterModule,ProductComponent, HeaderComponent, HerosectionComponent]
})
export class AppComponent {
  title = 'angularbasics';
}
