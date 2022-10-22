import { Component, OnInit } from '@angular/core';
import { Person } from './Person';

@Component({
  selector: 'app-user-list',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.scss']
})

export class UserlistComponent implements OnInit {
  public arrUsers: Person[] = [];
  public userLogin!: string;
  public userPassword!: string;
  public userEmail!: string;
  public isFilled = true;
  public isEditing = false;
  public userIndex!: number;
  constructor() { }

  ngOnInit(): void {
  }
  addUser(): void {
    if (/[A-Za-z]{4,16}/.test(this.userLogin) && /[\w\.-_]{4,16}/.test(this.userPassword) &&
      /[\w\.-]+@{1}[a-z]{3,}\.[a-z]{2,4}/.test(this.userEmail)) {
      let newUser = new Person(this.userLogin, this.userPassword, this.userEmail)
      this.arrUsers.push(newUser);
      this.userLogin = '';
      this.userPassword = '';
      this.userEmail = '';
      this.isFilled = true;
    }
    else {
      this.isFilled = false;
    }
  }

  editUser(index: number): void {
    this.userIndex = index;
    this.userLogin = this.arrUsers[index].login;
    this.userPassword = this.arrUsers[index].password;
    this.userEmail = this.arrUsers[index].email;
    this.isEditing = true;
  }
  deleteUser(index: number): void {
    this.arrUsers.splice(index, 1)
  }
  saveUser() {
    if (/[A-Za-z]{4,16}/.test(this.userLogin) && /[\w\.-_]{4,16}/.test(this.userPassword) &&
      /[\w\.-]+@{1}[a-z]{3,}\.[a-z]{2,4}/.test(this.userEmail)) {
      this.isEditing = false;
      let newUser = new Person(this.userLogin, this.userPassword, this.userEmail)
      this.arrUsers.splice(this.userIndex, 1, newUser);
      this.userLogin = '';
      this.userPassword = '';
      this.userEmail = '';
      this.isFilled = true;
    }
    else {
      this.isFilled = false;
    }
  }
}
