import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'WINDER_FRONT';
  items!: any[];

  constructor(public router: Router) {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'Ma',
        icon: 'pi pi-fw pi-telegram'
      },
      {
        label: '3inich',
        icon: 'pi pi-fw pi-users'
      },
      {
        label: 'bech',
        icon: 'pi pi-fw pi-calendar'
      },
      {
        label: 'nkhdem',
        icon: 'pi pi-fw pi-cog'
      }
    ];
  }
}
