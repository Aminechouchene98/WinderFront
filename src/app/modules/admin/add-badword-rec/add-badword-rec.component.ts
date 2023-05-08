import { Component } from '@angular/core';
import {DictionnaireBadWordsService} from "../../../shared/services/project/dictionnaire-bad-words.service";
import {DictionnaireBadWords} from "../../../shared/services/project/DictionnaireBadWords";
import {Router} from "@angular/router";

@Component({
  selector: 'winder-add-badword-rec',
  templateUrl: './add-badword-rec.component.html',
  styleUrls: ['./add-badword-rec.component.scss']
})
export class AddBadwordRecComponent {

  newBadWord!: string;

  constructor(private badWordService: DictionnaireBadWordsService, private router:Router) {}

  addBadWord(): void {
    const newBadWord: DictionnaireBadWords = {
      id: 0,
      word: this.newBadWord
    };

    this.badWordService.addBadWord(newBadWord).subscribe(
      () => {
        console.log('Mot interdit ajouté avec succès !');
        // Réinitialiser le champ du formulaire
        this.router.navigate(['/admin/badword-rec'])
        this.newBadWord = '';
      },
      (error) => {
        console.error('Erreur lors de l\'ajout du mot interdit :', error);
      }
    );
  }

}
