import React, { Component } from 'react'

export class Cbc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            toggle: false
        }
      }
    clickHandler = ()=>{
        this.setState({toggle:true})
        setTimeout(()=>{
            this.setState({toggle:false})
        },5000)
    }
    render() {
        return (
            <div>
                <button onClick={this.clickHandler} disabled={this.state.toggle}>CBC Example</button>
            </div>
        )
    }
}

export default Cbc
