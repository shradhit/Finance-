import React, { Component } from 'react';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columns: [
                { name: "C1", id: 0 },
                { name: "C2", id: 1 },
                { name: "C3", id: 2 },
                { name: "C4", id: 3 }
            ],
            data: [
                ["Mark", "d1", "d1", "d1"],
                ["Dustin", "d2", "d2", "d2"],
                ["Zend", "d3", "d3", "d3"],
                ["Stephen", "d4", "d4", "d4"],
                ["Pete", "d5", "d5", "d5"]
            ],
            prev: -1,
            ascSort: true
        };
    }
    handleClick(e, id) {
        var r1 = -1;
        var r2 = 1;
        if (this.state.prev === id) {
            this.setState({ ascSort: !this.state.ascSort });
        } else {
            this.setState({ ascSort: true });
        }
        if (!this.state.ascSort) {
            r1 = 1;
            r2 = -1;
        }
        this.setState({
            data: this.state.data.sort(function (x, y) {
                if (x[id] < y[id]) {
                    return r1;
                }
                return r2;
            })
        })
        this.setState({ prev: id });
    }
    render() {
        return (
            <div className="App">
                <table className="table table-striped table-condensed table-hover">
                    <thead>
                        <tr>
                            {this.state.columns.map(c => {
                                return <th key={c} onClick={e => this.handleClick(e, c.id)}>{c.name}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.data.map(r => {
                            return <tr>{r.map(rv => {
                                return <td>{rv}</td>
                            })}</tr>
                        }
                        )}
                    </tbody>
                </table>
            </div>
        );
    }
}
export default Table;