import { Component } from '@angular/core';
import { Kitten } from '../kitten';

@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent {

  adoptedKittens: Kitten[] = [
    { name: 'Chaton 1', breed: 'Persan', birthdate: new Date('2021-01-01'), image: 'https://via.placeholder.com/150' },
    { name: 'Chaton 2', breed: 'Siamois', birthdate: new Date('2021-02-01'), image: 'https://via.placeholder.com/150' },
    { name: 'Chaton 3', breed: 'Bengal', birthdate: new Date('2021-03-01'), image: 'https://via.placeholder.com/150' }
  ];

}
