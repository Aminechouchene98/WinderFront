import {Component, OnInit} from '@angular/core';
import * as FileSaver from 'file-saver';
import { ReclamationService } from 'src/app/shared/services/project/reclamation.service';
import {Reclamation} from "../../../shared/services/project/reclamation";
import {Observable} from "rxjs";

@Component({
  selector: 'winder-reclamation',
  templateUrl: './reclamation.component.html',
  styleUrls: ['./reclamation.component.scss']
})
export class ReclamationComponent implements OnInit{

  reclamations: Reclamation[] = [];

  constructor(private reclamationService: ReclamationService) {}

  ngOnInit() {
    this.getReclamations();
  }

  getReclamations(): void {
    this.reclamationService.listReclamations()
      .subscribe(reclamations => this.reclamations = reclamations);
  }
  deleteReclamation(id: number): void {
    this.reclamationService.deleteReclamation(id)
      .subscribe(() => {
        // Réclamation supprimée avec succès, effectuez les actions nécessaires (par exemple, actualisez la liste des réclamations)
        this.getReclamations();
      });
  }




  exportPdf() {
    //import('jspdf').then((jsPDF) => {
    // import('jspdf-autotable').then((x) => {
    //  const doc = new jsPDF.default('p', 'px', 'a4');
    // (doc as any).autoTable(this.exportColumns, this.products);
    //   doc.save('products.pdf');
    // });
    //  });
  }

  exportExcel() {
    import('xlsx').then((xlsx) => {
      // const worksheet = xlsx.utils.json_to_sheet();
      //  const workbook = { Sheets: { data: worksheet }, SheetNames: ['data'] };
      // const excelBuffer: any = xlsx.write(workbook, { bookType: 'xlsx', type: 'array' });
      // this.saveAsExcelFile(excelBuffer, 'products');
    });
  }

  saveAsExcelFile(buffer: any, fileName: string): void {
    let EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    let EXCEL_EXTENSION = '.xlsx';
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, fileName + '_export_' + new Date().getTime() + EXCEL_EXTENSION);
  }
}
