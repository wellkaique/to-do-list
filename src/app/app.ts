// ...existing code...
import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';



export interface Todoitem{
  id: number,
  task: string,
  completed: boolean,
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgClass],
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
  toggleCompleted(id: number): void {
  this.Todolist = this.Todolist.map(todo =>
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  );
}


  deletetask(id: number): void {
  this.Todolist = this.Todolist.filter(item => item.id !== id);
}

}


// ...existing code...