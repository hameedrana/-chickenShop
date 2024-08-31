import { Component } from '@angular/core';

@Component({
  selector: 'app-chiken-menu',
  templateUrl: './chiken-menu.component.html',
  styleUrls: ['./chiken-menu.component.scss']
})

export class ChikenMenuComponent {
  items = ['Individual Meals', 'Chicken & Ribs Combo', 'Chicken & BBQ Ribs A La Carte','Sides','Tenders & Wings', 'Sandwiches | Pitas | Wrap','7th item'];

  currentIndex = 0;
  mobileCurrentIndex=0;

  get visibleItems() {
    return this.items.slice(this.currentIndex, this.currentIndex + 5);
  }
  moveForward() {
    if (this.currentIndex + 5 < this.items.length) {
      this.currentIndex++;
    }
  }

  moveBackward() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

//for mobile screen
  get visibleItem() {
    return this.items.slice(this.mobileCurrentIndex, this.mobileCurrentIndex + 2);
    
  }

  forward() {

    if (this.mobileCurrentIndex + 2 < this.items.length) {
      this.mobileCurrentIndex++;

    }
  }

  backward() {
    if (this.mobileCurrentIndex > 0 ) {
      this.mobileCurrentIndex--;

    }
  }
//
 
}
