import { Component, OnInit } from '@angular/core';

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  selector: 'app-checklist2',
  templateUrl: './checklist2.component.html',
  styleUrls: ['./checklist2.component.css']
})

export class Checklist2Component{

  task: Task = {
    name: 'Human Resources',
    completed: false,
    subtasks: [
      {name: 'Confirmation on employee last working day', completed: false},
      {name: 'Notify TA team', completed: false},
      {name: 'Exit Interview Form', completed: false},
      {name: 'Exit Clearance Form', completed: false},
      {name: 'Filing', completed: false}
    ]
  };

  task2: Task = {
    name: 'Administration',
    completed: false,
    subtasks: [
      {name: 'Acknowledge received of company asses', completed: false}
    ]
  };
  
  task3: Task = {
    name: 'Information Technology',
    completed: false,
    subtasks: [
      {name: 'Acknowledge received of Laptop', completed: false},
      {name: 'Acknowledge received of PC', completed: false},
      {name: 'Acknowledge received of Mouse', completed: false},
      {name: 'Delete employee name from distribution list', completed: false}
    ]
  };

  task4: Task = {
    name: 'Hiring Manager',
    completed: false,
    subtasks: [
      {name: 'Agreed on employee last working day', completed: false},
      {name: 'Acknowledge received of documents/files', completed: false}
    ]
  };

  task5: Task = {
    name: 'Admin Operation',
    completed: false,
    subtasks: [
      {name: 'Remove employee name from Timesheet', completed: false}
    ]
  };

  allComplete: boolean = false;
  allComplete2: boolean = false;
  allComplete3: boolean = false;
  allComplete4: boolean = false;
  allComplete5: boolean = false;

  updateAllComplete() {
    this.allComplete = this.task.subtasks != null && this.task.subtasks.every(t => t.completed);
  }

  someComplete(): boolean {
    if (this.task.subtasks == null) {
      return false;
    }
    return this.task.subtasks.filter(t => t.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.task.subtasks == null) {
      return;
    }
    this.task.subtasks.forEach(t => t.completed = completed);
  }


  updateAllComplete2() {
    this.allComplete2 = this.task2.subtasks != null && this.task2.subtasks.every(t => t.completed);
  }

  someComplete2(): boolean {
    if (this.task2.subtasks == null) {
      return false;
    }
    return this.task2.subtasks.filter(t => t.completed).length > 0 && !this.allComplete2;
  }

  setAll2(completed: boolean) {
    this.allComplete2 = completed;
    if (this.task2.subtasks == null) {
      return;
    }
    this.task2.subtasks.forEach(t => t.completed = completed);
  }

  
  updateAllComplete3() {
    this.allComplete3 = this.task3.subtasks != null && this.task3.subtasks.every(t => t.completed);
  }

  someComplete3(): boolean {
    if (this.task3.subtasks == null) {
      return false;
    }
    return this.task3.subtasks.filter(t => t.completed).length > 0 && !this.allComplete3;
  }

  setAll3(completed: boolean) {
    this.allComplete3 = completed;
    if (this.task3.subtasks == null) {
      return;
    }
    this.task3.subtasks.forEach(t => t.completed = completed);
  }

  
  updateAllComplete4() {
    this.allComplete4 = this.task4.subtasks != null && this.task4.subtasks.every(t => t.completed);
  }

  someComplete4(): boolean {
    if (this.task4.subtasks == null) {
      return false;
    }
    return this.task4.subtasks.filter(t => t.completed).length > 0 && !this.allComplete4
  }

  setAll4(completed: boolean) {
    this.allComplete4 = completed;
    if (this.task4.subtasks == null) {
      return;
    }
    this.task4.subtasks.forEach(t => t.completed = completed);
  }

  
  updateAllComplete5() {
    this.allComplete5 = this.task5.subtasks != null && this.task5.subtasks.every(t => t.completed);
  }

  someComplete5(): boolean {
    if (this.task5.subtasks == null) {
      return false;
    }
    return this.task5.subtasks.filter(t => t.completed).length > 0 && !this.allComplete5;
  }

  setAll5(completed: boolean) {
    this.allComplete5 = completed;
    if (this.task5.subtasks == null) {
      return;
    }
    this.task5.subtasks.forEach(t => t.completed = completed);
  }

  /*onSubmit() {
    console.warn(this.task.subtasks);
  }*/

}
