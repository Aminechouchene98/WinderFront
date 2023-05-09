import { Component } from '@angular/core';
import { ReclamationService } from 'src/app/shared/services/project/reclamation.service';

@Component({
  selector: 'winder-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent {
  constructor(private reclamationService: ReclamationService) {}

  ngOnInit(): void {
    this.reclamationService.getAllReclamations().subscribe((data) => {
      console.log(data);
    });
  }
}
