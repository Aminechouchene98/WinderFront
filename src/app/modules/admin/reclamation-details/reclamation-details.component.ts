import {Component, OnInit} from '@angular/core';
import {Reclamation} from "../../../shared/services/project/reclamation";

import {ActivatedRoute, Router} from "@angular/router";
import {ReclamationService} from "../../../shared/services/project/reclamation.service";
import { ResponseService } from 'src/app/shared/services/project/response.service';
import {ResponseData} from "../../../shared/services/project/ResponseData";
import {Response} from "../../../shared/services/project/response";

@Component({
  selector: 'winder-reclamation-details',
  templateUrl: './reclamation-details.component.html',
  styleUrls: ['./reclamation-details.component.scss']
})
export class ReclamationDetailsComponent implements OnInit {

  reclamation!: Reclamation;
  response: ResponseData = {} as ResponseData;
  responses: ResponseData[] = [];
  reclamations: Reclamation[] = [];


  constructor(
    private route: ActivatedRoute,
    private reclamationService: ReclamationService,
    private responseService: ResponseService, private router:Router


) { }

  ngOnInit(): void {
    this.getReclamationDetail();
    this.getReclamations();
   // this.getReclamationResponses();

  }
  getReclamations(): void {
    this.reclamationService.listReclamations()
      .subscribe(res=>{
        this.reclamations = res

        console.log(res)

      })


  }
  /*getReclamationResponses(): void {
    if (this.reclamation && this.reclamation.idRec) {
      this.responseService.getResponsesByReclamation(this.reclamation.idRec)
        .subscribe(
          responses => {
            this.responses = responses;
          },
          error => {
            // Gérer l'erreur de récupération des réponses de la réclamation
          }
        );
    }
  } */

  getReclamationResponsess(reclamationId: number): ResponseData[] {
    if (this.responses && this.reclamation) {
      return this.responses.filter(response => response.reclamation.idRec === reclamationId);
    }
    return [];
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
          this.router.navigate(['reclamation']);
          // La réponse a été ajoutée avec succès, effectuez les actions nécessaires (redirection, mise à jour de la vue, etc.)
        },
        (error) => {
          // Une erreur s'est produite lors de l'ajout de la réponse, gérez l'erreur en conséquence
        }
      );
    }
  }

}
