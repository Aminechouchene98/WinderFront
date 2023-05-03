import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from "../../shared/user.service";
import {HttpClient, HttpParams} from "@angular/common/http";
import {User} from "../auth/user";


@Component({
  selector: 'winder-display-users',
  templateUrl: './display-users.component.html',
  styleUrls: ['./display-users.component.scss']
})
export class DisplayUsersComponent implements  OnInit{



  constructor(private userService: UserService) { }

  users: any;
  nb = 1 ;

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getusers().subscribe(users => {
      this.users = users;
    });
  }

  deleteUser(userName: string) {
    this.userService.deleteUser(userName).subscribe(() => {
      this.users = this.users.filter((user: User) => user.userName !== userName);
    });
  }

  updateUser(user : User , userName : string )
  {
    this.userService.updateUser(user,userName);
  }










}
