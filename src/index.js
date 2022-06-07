import './styles.css';
import {Todo, TodoList} from './classes';
import { crearTodoHtml } from './js/componentes';


export const todoList = new TodoList();

todoList.todos.forEach(todo => crearTodoHtml(todo));

// const newTodo = new Todo('Aprender JS');
// todoList.nuevoTodo(newTodo);

console.log(todoList);






// const tarea = new Todo('Aprender JS');
// todoList.nuevoTodo(tarea);

// console.log(todoList);

// crearTodoHtml(tarea);


// localStorage.setItem( 'mi-key', 'ABC1234' );

// sessionStorage.setItem( 'mi-key', 'ABC1234' );

// setTimeout( () => {
//     localStorage.removeItem('mi-key');
// }, 1500);