import React, { Component } from 'react';

class JsonFetching extends Component {
    constructor() {
        super();
        this.state = {
            req: 0,
            success: "False"
        }
    }
    do_request(e) {
        console.log("Called")
        this.setState({ req: 1 })
        fetch('/order_endpoint', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                'order_id': 22,
                'user_id': 124,
                'side': 0,
                'ask_price': '80'
            })
        })
            .then(res => res.json())
            .then(
                ack => {
                    console.log(ack)
                    if(ack.success) {
                        this.setState({success:"True"})
                    }
                }
            )
    }
    render() {
        return (
            <div>
                <button onClick={e => this.do_request(e)} >
                    Click Me
                </button>
                <h1 > The request {this.state.success}</h1>
            </div>
        );
    }
}

export default JsonFetching;