import React, { Component } from 'react'

export default class Cbc extends Component {
    constructor(props){
        super(props)
        this.state = {
            input: "",
            todos: []
        }
    }

    formHandler = (e)=>{
        e.preventDefault()
        if(this.state.input){
            this.setState({...this.state, todos: [...this.state.todos, this.state.input]})
        }
        else{
            alert("Write something")
        }
    }

    setInput = (e)=>{
        this.setState({...this.state, input: e.target.value})

    }


    render() {
        return (
            <div>
            <form onSubmit={this.formHandler}>
            <input type="text" value={this.state.input} onChange={this.setInput} placeholder="Enter todo.."  />
            <button type="submit">Submit</button>
            </form>

            {this.state.todos.length !== 0 ? this.state.todos.map(todo=>
            <h3>{todo}</h3>
            ): <p>No todos to show</p>}
        </div>
        )
    }
}
