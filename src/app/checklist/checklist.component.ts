import { Component, OnInit } from '@angular/core';

export interface Task {
  name: string;
  completed: boolean;
  subtasks?: Task[];
}

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.css']
})

export class ChecklistComponent{

  task: Task = {
    name: 'Talent Acquisition',
    completed: false,
    subtasks: [
      {name: 'Announcement of New Joiner', completed: false},
      {name: 'Office Tour', completed: false},
      {name: 'Colleague Introduction', completed: false},
      {name: 'HR_PR to create email account', completed: false}
    ]
  };

  task2: Task = {
    name: 'Human Resources',
    completed: false,
    subtasks: [
      {name: 'Onboarding Forms', completed: false},
      {name: 'Onboarding Training', completed: false},
      {name: 'Create Personal Files', completed: false},
      {name: 'Orientation', completed: false},
      {name: 'Welcome Kits', completed: false},
      {name: 'WhatsApp Group', completed: false},
      {name: 'Insurance', completed: false},
      {name: 'Leave Record', completed: false},
      {name: 'Org Chart', completed: false},
      {name: 'Payroll Information', completed: false},
      {name: 'Staff ID Card', completed: false}
    ]
  };
  
  task3: Task = {
    name: 'Admin Operation',
    completed: false,
    subtasks: [
      {name: 'Timesheet Name List', completed: false},
      {name: 'EKP Account Application', completed: false}
    ]
  };

  task4: Task = {
    name: 'Administration',
    completed: false,
    subtasks: [
      {name: 'Workstation', completed: false},
      {name: 'Thumbprint access', completed: false},
      {name: 'Business card', completed: false},
      {name: 'Building access card', completed: false},
      {name: 'Season Parking', completed: false},
      {name: 'Stationeries', completed: false},
      {name: 'Update Floor Plan', completed: false},
      {name: 'Update Phone Directory', completed: false}
    ]
  };

  task5: Task = {
    name: 'Information Technology',
    completed: false,
    subtasks: [
      {name: 'Laptop/PC', completed: false},
      {name: 'Company Email', completed: false},
      {name: 'Printer', completed: false},
      {name: 'Direct Phone Line', completed: false},
      {name: 'Distribution List', completed: false},
      {name: 'Inventory List', completed: false}
    ]
  };

  task6: Task = {
    name: 'Hiring Manager',
    completed: false,
    subtasks: [
      {name: 'Briefing on Job Scope/Task', completed: false},
      {name: 'Assign Buddy/Mentor', completed: false},
      {name: 'KPI Setup', completed: false},
      {name: 'Welcome Lunch', completed: false}
    ]
  };

  allComplete: boolean = false;
  allComplete2: boolean = false;
  allComplete3: boolean = false;
  allComplete4: boolean = false;
  allComplete5: boolean = false;
  allComplete6: boolean = false;

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

  
  updateAllComplete6() {
    this.allComplete6 = this.task6.subtasks != null && this.task6.subtasks.every(t => t.completed);
  }

  someComplete6(): boolean {
    if (this.task6.subtasks == null) {
      return false;
    }
    return this.task6.subtasks.filter(t => t.completed).length > 0 && !this.allComplete6;
  }

  setAll6(completed: boolean) {
    this.allComplete6 = completed;
    if (this.task6.subtasks == null) {
      return;
    }
    this.task6.subtasks.forEach(t => t.completed = completed);
  }

}
