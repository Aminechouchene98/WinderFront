import { Component } from '@angular/core';

@Component({
  selector: 'winder-post-project',
  templateUrl: './post-project.component.html',
  styleUrls: ['./post-project.component.scss']
})
export class PostProjectComponent {
  step = 1;
  progress = 20;
  stepLabel = ['Headline', 'Skills', 'Scope', 'Budget', 'Description', 'Review'];
  setStepForward() {
    this.step++;
    this.progress = this.progress + 20;
  }

  setStepBack() {
    this.step--;
    this.progress = this.progress - 20;
  }
}
