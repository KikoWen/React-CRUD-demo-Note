import React, {Component} from 'react';
// import logo from './logo.svg';
import NewTodoForm from './NewTodoForm.jsx'; 
import Todo from './Todo.jsx'; //Kiko, after created component, have to import here.
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      todos:[
        {
          id:1,
          content: 'Ring Peter',
          priority: 'Important'
        },
        {
          id:2,
          content: 'Water plants',
          priority: 'Urgent'
        },
        {
          id:3,
          content: 'Get milk',
          priority: 'Can wait'
        },
      ]
    };
    
    
  }

  //data make sure replact to the above state '...date' means spread out. 
  addTodo = (data) =>{
    var newTodo ={
      id: Date.now(),
      ...data
    };

    var todos= [newTodo,...this.state.todos];

    this.setState({
      // Kiko, todos: todos //one from state, one from bucket, if two are the same name just do 'todos'
      todos
    });
  }
  removeTodo = (id) =>{
    var todos = this.state.todos;

    // var filtered = todos.filter(function(todo)
    var filtered = todos.filter((todo) => {
      // return true/false
      return todo.id !== id;
    });

    this.setState({
      todos:filtered
    });
  }
  updateTodo= (id,data) =>{
    var todos = this.state.todos;
    var index = todos.findIndex(function(todo){
      // return true/false
      return todo.id ===id;
    });
    
    var updatedTodo ={
      ...todos[index], //Kiko this is old data
      ...data //Kiko, mix with new data
    };
    todos[index] = updatedTodo;

    this.setState({todos:todos});
    this.setState({todos}); //Kiko, short hand for above, as todos is the same as todos


  }

  render(){
    
    return(
      <div className="wrap">
        {/* for testing */}
        {/* <button onClick ={e => {this.addTodo({content:'test', priority:'hi'})}}> Test </button>  */}
        {/* for testing end, Trung will show us a better way*/}
        <div className="container">
          <div className="todos">
            {
              this.state.todos.map((todo) => {
               
                var todoProps = {
                  ...todo,
                  key:todo.id,
                  removeTodo: this.removeTodo,  //Kiko, this is store into the list, so you dont need to add it into <...todo/> again.
                  updateTodo: this.updateTodo

                }; //Kiko, new way

                return(

                  <Todo {...todoProps}  /> //updateTodo ={this.updateTodo} doesn't need to add this as it has been updated into todoProps above //Kiko, new way
                  // <Todo key ={todo.id} {...todo}/> //Kiko, normal way
                )
              })
            }
         
            {/* Kiko, this is to past the function up, because data can only pass down not up, therefore, have to create a function outside to extract it back up. because in React, Javascript function treated as first class */}
          <NewTodoForm  addTodo={this.addTodo}/> 
        </div>
      </div>
      </div>
    );
  }
}

export default App;
