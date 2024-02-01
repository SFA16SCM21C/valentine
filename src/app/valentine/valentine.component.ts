import { Component } from '@angular/core';

@Component({
  selector: 'app-valentine',
  templateUrl: './valentine.component.html',
  styleUrls: ['./valentine.component.css']
})
export class ValentineComponent {
  isNoButtonFocused: boolean = false;

  toggleNoButtonFocus(isFocused: boolean) {
    this.isNoButtonFocused = isFocused;
  }
}
