import { Component } from '@angular/core';
import { Todo } from './model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
hover() {
throw new Error('Method not implemented.');
}

  todoList :Todo []=[];
  todo:Todo = this.initTodo;

  get initTodo ():Todo{
    return {
      Title:'',
      Id:null
    }
  }

  addTodo():void {
    console.log(this.todo)


    if(this.todo.Id){

    this.todoList = this.todoList.map(o=> {

      if(o.Id == this.todo.Id){
        o.Title = this.todo.Title;
      }
      return o;
    })

    } 
    else {

      this.todo.Id = Date.now();
      this.todoList.push({...this.todo});
    }

  


    console.log(this.todoList)

    this.todo =this.initTodo;
  }

  editTodo(todo:Todo) :void{

    this.todo = {...todo};
  }

  delteTodo(id:number):void {
    this.todoList = this.todoList.filter(o=>o.Id!=id);

  }
 
}
