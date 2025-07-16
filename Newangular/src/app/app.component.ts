import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { PracticeComponent } from "./practice/practice.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone:true,
  imports: [PracticeComponent]
})
export class AppComponent implements OnInit {
  mydata:any[]=[]
  constructor(private dataService: DataService) {}

  ngOnInit() {
    console.log(this.dataService.getmessage());
    this.dataService.getUsers().subscribe(data=>{ 
      this.mydata=data
       console.log(this.mydata)
    })
   
  }
}
