import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'winder-project-element',
  templateUrl: './project-element.component.html',
  styleUrls: ['./project-element.component.scss']
})
export class ProjectElementComponent {
  @Input() project: any;
  ngOnInit(): void {
    console.log(this.project);
  }

  showProjectDetails = false;
}
