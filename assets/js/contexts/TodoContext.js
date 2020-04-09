import React, {Component, createContext} from 'react';

export const TodoContext = createContext();

class TodoContextProvider extends Component {

    constructor() {
        super();
        this.state = {
            todos:[
                {name: 'Faire une marche'},
                ],
        };
    }

    //create
    createTodo(e,todo){
        e.preventDefault();
        let data = [...this.state.todos,todo];
       // data.push(todo);
        this.setState({
            todos:data,
        })
    }
    //read
    readTodo(){

    }
    //update
    updateTodo(){

    }
    //delete
    deleteTodo(){

    }

    render() {
        return (
            <TodoContext.Provider value={{
                ...this.state,
                createTodo: this.createTodo.bind(this),
                updateTodo: this.updateTodo.bind(this),
                readTodo: this.readTodo.bind(this),
                deleteTodo: this.deleteTodo.bind(this)
            }}>
                {this.props.children}
            </TodoContext.Provider>
        );
    }
}

export default TodoContextProvider;