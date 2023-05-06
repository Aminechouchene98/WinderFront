import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {DialogService} from "primeng/dynamicdialog";
import {ProfileComponent} from "./modules/profile/profile.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DialogService]
})
export class AppComponent {
  title = 'WINDER_FRONT';
  items!: any[];

  constructor(public router: Router,private dialogService: DialogService) {}

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
      },
      {
        label: 'Profile',
        icon: 'pi pi-fw pi-user',
        command: () => this.showProfileDialog()
      }
    ];
  }



  showProfileDialog() {
    const ref = this.dialogService.open(ProfileComponent, {
      header: 'My Profile',
      width: '300px',
      closable: true
    });

  }




}
