import React, {Component} from 'react';

//information only follow down, can not go back up, have to do something to sort this out

class NewTodoForm extends Component{
    constructor(props){
        super(props);

        this.state = {
          contentInput:'',
          priorityInput:''
        }
    }

    handleContentInputChange = (e)=>{

      this.setState({
        contentInput:e.target.value
      });
    }

    handlePriorityInputChange = (e) =>{

      this.setState({
        priorityInput:e.target.value
      })

    }

    handleTodoAddClick = (e) =>{

      e.preventDefault();

      var data ={
        content:this.state.contentInput,
        priority: this.state.priorityInput
      }
      this.props.addTodo(data);

    }

    render(){
        return(
            <div className="todo new-todo">
            <form className="todo-body">
                <div className="form-group">
                  <label htmlFor="content-input">Content</label>
                  <input type="text" className="form-control" id="content-input" onChange={this.handleContentInputChange}/>
                </div>

                <div className="form-group">
                  <label htmlFor="priority-input">Priority</label>
                  <input type="text" className="form-control" id="priority-input" onChange={this.handlePriorityInputChange}/>
                </div>
          
                <button onClick={this.handleTodoAddClick} type="submit" className="btn btn-primary todo-add">Add</button>
            </form>
          </div>
        );
    }
}

export default NewTodoForm;