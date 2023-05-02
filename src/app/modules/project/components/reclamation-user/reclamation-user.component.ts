import { Component } from '@angular/core';
import { ReclamationService } from 'src/app/shared/services/project/reclamation.service';

@Component({
  selector: 'winder-reclamation-user',
  templateUrl: './reclamation-user.component.html',
  styleUrls: ['./reclamation-user.component.scss']
})
export class ReclamationUserComponent {
  form: any;

  constructor(private reclamationService: ReclamationService) {}

  onSubmit() {
    this.reclamationService.addReclamation(this.form).subscribe((data) => {
      console.log(data);
    });
  }
}
