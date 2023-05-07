import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {DialogService} from "primeng/dynamicdialog";
import {ProfileComponent} from "./modules/profile/profile.component";
import {UserService} from "./shared/user.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [DialogService]
})
export class AppComponent {
  title = 'WINDER_FRONT';
  items!: any[];

  constructor(public router: Router,private dialogService: DialogService,private userservice : UserService) {}

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
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off',
        command: () => this.userservice.logoutUser()
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
