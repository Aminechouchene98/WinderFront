import {Component, OnInit} from '@angular/core';
import {Reclamation} from "../../../shared/services/project/reclamation";
import {ActivatedRoute} from "@angular/router";
import {ReclamationService} from "../../../shared/services/project/reclamation.service";
import { ResponseService } from 'src/app/shared/services/project/response.service';
import {ResponseData} from "../../../shared/services/project/ResponseData";

@Component({
  selector: 'winder-reclamation-details',
  templateUrl: './reclamation-details.component.html',
  styleUrls: ['./reclamation-details.component.scss']
})
export class ReclamationDetailsComponent implements OnInit {

  reclamation!: Reclamation;
  response: ResponseData = {} as ResponseData;

  constructor(
    private route: ActivatedRoute,
    private reclamationService: ReclamationService,
    private responseService: ResponseService

) { }

  ngOnInit(): void {
    this.getReclamationDetail();
  }

  getReclamationDetail(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam !== null) {
      const id = +idParam;
      this.reclamationService.getReclamationById(id)
        .subscribe(
          reclamation => {
            this.reclamation = reclamation;
            // Autres actions à effectuer lorsque les détails de la réclamation sont récupérés
          },
          error => {
            // Gérer l'erreur de récupération des détails de la réclamation
          }
        );
    } else {
      // Gérer le cas où le paramètre 'id' n'est pas présent dans l'URL
    }
  }

  deleteReclamation(idRec: number): void {
    if (confirm('Voulez-vous vraiment supprimer cette réclamation ?')) {
      this.reclamationService.deleteReclamation(this.reclamation.idRec)
        .subscribe(
          () => {
            // Réclamation supprimée avec succès, rediriger vers la liste des réclamations
          },
          error => {
            // Gérer l'erreur de suppression de la réclamation
          }
        );
    }
  }

  repondreReclamation(): void {
    // Logique pour répondre à la réclamation
  }
  submitResponse() {
    if (this.response.description) {
      // Associez la réponse à la réclamation actuelle
      this.response.reclamation = this.reclamation;

      // Appelez la méthode addResponse du service ResponseService
      this.responseService.addResponse(this.response, this.reclamation.idRec).subscribe(
        () => {
          // La réponse a été ajoutée avec succès, effectuez les actions nécessaires (redirection, mise à jour de la vue, etc.)
        },
        (error) => {
          // Une erreur s'est produite lors de l'ajout de la réponse, gérez l'erreur en conséquence
        }
      );
    }
  }

}
