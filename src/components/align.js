import React, { Component } from "react";

export default class Align extends Component {
    constructor(props) {
        super(props);

        this.state = {
            align: ""
        }
    }

    handleAlign = align => {
        this.setState({
            align
        })
    }

    render() {
        return (
            <div style={{ width: "100vw", display: "flex", alignItems: "center", justifyContent: "center"}}>
                <div>
                    <h1 style={{ textAlign: this.state.align }}>Push Me</h1>
                    <button onClick={() => this.handleAlign("left")}>Left</button> 
                    <button onClick={() => this.handleAlign("center")}>Center</button>            
                    <button onClick={() => this.handleAlign("right")}>Right</button>            
                </div>            
            </div>

        )
    }
}