import { Component } from '@angular/core';
import { Kitten } from '../kitten';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent {

  kittens: Kitten[] = [
    { name: 'Chaton 1', breed: 'Persan', birthdate: new Date('2021-01-01'), image: 'https://via.placeholder.com/150' },
    { name: 'Chaton 2', breed: 'Siamois', birthdate: new Date('2021-02-01'), image: 'https://via.placeholder.com/150' },
    { name: 'Chaton 3', breed: 'Bengal', birthdate: new Date('2021-03-01'), image: 'https://via.placeholder.com/150' },
    { name: 'Chaton 4', breed: 'Maine Coon', birthdate: new Date('2021-04-01'), image: 'https://via.placeholder.com/150' },
    { name: 'Chaton 5', breed: 'Sphynx', birthdate: new Date('2021-05-01'), image: 'https://via.placeholder.com/150' }
  ];

  adoptedKittens: Kitten[] = [];

  adoptKitten(kitten: Kitten) {
    // Retirer le chaton de la collection globale et l'ajouter à la collection de chatons adoptés
    const index = this.kittens.indexOf(kitten);
    if (index !== -1) {
      this.kittens.splice(index, 1);
      this.adoptedKittens.push(kitten);
    }
  }

}
