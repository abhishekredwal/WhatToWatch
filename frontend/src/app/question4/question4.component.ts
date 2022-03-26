import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-question4',
  templateUrl: './question4.component.html',
  styleUrls: ['./question4.component.scss']
})
export class Question4Component implements OnInit {

  constructor(private router:Router) { }
  selectedOccasion: string | undefined;
  ngOnInit(): void {
  }
  
  //Navigate to Question5
  goToQuestions(page:string):void{
    this.router.navigate([`${page}`]);
  }
  radioChange(event:any){
    this.selectedOccasion = event.target.value;
  }
  
}
