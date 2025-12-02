// ...existing code...
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgForOf } from "../../node_modules/@angular/common/types/_common_module-chunk";

export interface Todoitem{
  id: number,
  task: string,
  completed: boolean,
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgForOf],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  Todolist: Todoitem[] = [];
  Newtask: string = '';

  addTask():void {
    if(this.Newtask.trim()!==''){
      const newTodoitem: Todoitem ={
        id: Date.now(),
        task: this.Newtask,
        completed: false,
      
      }
      this.Todolist.push(newTodoitem)
      this.Newtask = ''
    }
  }
} 



// ...existing code...