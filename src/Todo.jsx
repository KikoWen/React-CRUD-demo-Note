import React, {Component} from 'react';

class Todo extends Component{
    constructor(props){
        super(props);
        this.state = {
          updatingContent: false,
          updatingPriority: false,
          // contentInput: '',
          // contentInput: this.props.content,
          contentInput: props.content, 
          priorityInput:props.priority
        };

      
        
    }
    handleTodoRemoveClick = () =>{

      var id = this.props.id;

      this.props.removeTodo(id)

    }

    handleContentDoubleClick = (e) => {
      this.setState({updatingContent:true})
    }

    handlePriorityDoubleClick = (e) => {
      this.setState({updatingPriority:true})
    }

    handleContentInputBlur = (e) => {
      var id = this.props.id;
      var data ={
        content: this.state.contentInput
      };
      this.props.updateTodo(id,data);
      this.setState({updatingContent:false})
    }

    handlePriorityInputBlur = (e) =>{
      var id = this.props.id;
      var data = {
        priority: this.state.priorityInput
      };

      this.props.updateTodo(id,data);
      this.setState({updatingPriority:false})
    }

    handleContentInputChange = (e)=>{
      this.setState({contentInput: e.target.value});
    }

    handlePriorityInputChange =(e) =>{
      this.setState({priorityInput:e.target.value})
    }


    render(){
        return(
            <div className="todo">
              <div className="todo-body">
                <i className="far fa-times-circle todo-remove" onClick ={this.handleTodoRemoveClick}></i>
                <div className="todo-content" onDoubleClick={this.handleContentDoubleClick}  >
                  {/* if updating, return input box, else return content, ternary if  format: condition ? ifTrue : ifFalse */}
                  {/* {} this is break into JavaScript */}

                  {/* {this.state.updateingContent=== true ? 
                  (<input type="text" className="form-control" value="Call Peter"/> ): this.props.content}  */}
                  {/* short like below */}
                  {this.state.updatingContent ? 
                  (<input value={this.state.contentInput} onChange={this.handleContentInputChange} onBlur ={this.handleContentInputBlur} autoFocus type="text" className="form-control"/> ): this.props.content} 

                </div>
                <div className="todo-priority" onDoubleClick ={this.handlePriorityDoubleClick} >

                  {/* { this.state.updatingPriority === true ? 
                  (<input type="text" class="form-control form-control-sm" value="Important"/>): this.props.priority} */}
                  {/* {this.props.priority} */}
                  {/* short like below */}
                  { this.state.updatingPriority ? 
                    (<input value={this.state.priorityInput} onChange={this.handlePriorityInputChange} onBlur = {this.handlePriorityInputBlur} autoFocus type="text" className="form-control form-control-sm"/>): this.props.priority}
                
                </div>
              </div>
            </div>
        );
    }
}

export default Todo;