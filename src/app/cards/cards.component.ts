import { Component } from '@angular/core';
import { districts } from 'src/assets/District';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent {
collections = districts;
}
