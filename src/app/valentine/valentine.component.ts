import { Component } from '@angular/core';

@Component({
  selector: 'app-valentine',
  templateUrl: './valentine.component.html',
  styleUrls: ['./valentine.component.css']
})
export class ValentineComponent {

  header: string = "Will you be my valentine?";
  message: string = "You are mine now!";
  youAreMine: boolean = false;

  onYesClick() {
    this.youAreMine = true;
  }

  onNoClick() {
    
  }
}
