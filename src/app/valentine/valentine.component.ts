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
  isNoButtonDisabled: boolean = false;
  noButtonText: string = 'No';


  onYesClick() {
    this.youAreMine = true;
  }

  updateNoButtonText(isHovered: boolean) {
    if (isHovered) {
      this.noButtonText = "You think you have a choice?? (Think again)";
    } else {
      this.noButtonText = 'No';
    }
  }
}
