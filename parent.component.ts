import { Component, OnInit } from '@angular/core';
import { Task } from '../Task';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  public user = 'Ivan Ivanov';
  public newTask!: string;
  public tasks: Task[] = [];
  public taskCount = 0;

  constructor() { }

  ngOnInit(): void {
  }
  addNewTask(): void {
    if (this.newTask) {
      this.tasks.push(new Task(this.newTask, false));
      this.newTask = '';
      this.taskCount = this.tasks.length;
    }
  }
  getCount(data: boolean): void {
    if (data) {
      --this.taskCount
    }
  }

}
