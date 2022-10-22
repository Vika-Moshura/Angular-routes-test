import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenzor',
  templateUrl: './cenzor.component.html',
  styleUrls: ['./cenzor.component.scss']
})
export class CenzorComponent implements OnInit {
  public newBadWord!: string;
  public arrBadWords: string[] = [];
  public checkEmpty = false;
  public textToBeChecked: string = '';
  constructor() { }

  ngOnInit(): void {
  }
  addBadWord(): void {
    if (this.newBadWord !== '') {
      this.arrBadWords.push(this.newBadWord);
      this.newBadWord = '';
      this.checkEmpty = false;
    }
    else {
      this.checkEmpty = true;
    }
  }
  arrToString(): string {
    return this.arrBadWords.join(', ');
  }
  resetBadWords(): void {
    this.arrBadWords = [];
    this.newBadWord = '';
    this.checkEmpty = false;
    this.textToBeChecked = '';
  }
  checkTheText(): void {
    if (this.textToBeChecked !== '') {
      let newArr: string[] = this.textToBeChecked.split(' ').map((elem: string) => {
        return this.arrBadWords.includes(elem.toLowerCase()) ? '*'.repeat(elem.length) :
          this.arrBadWords.includes(elem.toUpperCase()) ? '*'.repeat(elem.length) : elem;
      });
      this.textToBeChecked = newArr.join(' ');
    }
    else {
      this.textToBeChecked = 'Type some text, which you want to check:)'
    }
  }
}
