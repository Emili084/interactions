import { Component } from '@angular/core';
import { Kitten } from '../kitten';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent {

  kitten: Kitten = new Kitten();

  onSubmit(form: NgForm) {
    if (form.valid) {
      // Ajouter le chaton à la collection globale
      this.kitten = new Kitten();
      form.reset();
    }
  }

}
