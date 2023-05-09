import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'winder-redirect-to-test',
  templateUrl: './redirect-to-test.component.html',
  styleUrls: ['./redirect-to-test.component.scss']
})
export class RedirectToTestComponent {
  constructor(private router: Router){
  }


  gotoTest() {
    this.router.navigate(['/']);
  }
}
