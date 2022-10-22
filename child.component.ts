import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../Task';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  @Input() arrTasks!: Task[];
  @Output() fromChild = new EventEmitter<boolean>()
  public isEditing = false;
  public taskIndex!: number;
  public tastToEdit!: string;

  constructor() { }

  ngOnInit(): void {
  }
  editTask(index: number): void {
    this.taskIndex = index;
    this.isEditing = true;
    this.tastToEdit = this.arrTasks[index].name;
  }
  saveChanges(): void {
    this.isEditing = false;
    this.arrTasks[this.taskIndex].name = this.tastToEdit;
  }
  deleteTask(index: number): void {
    this.arrTasks.splice(index, 1);
    this.fromChild.emit(true)
  }
  changeStatus(event: Event, index: number): void {
    if (this.arrTasks[index].status) {
      this.arrTasks[index].status = false;
    }
    else {
      this.arrTasks[index].status = true;
    }
  }
}

