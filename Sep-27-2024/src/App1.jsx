import { Component } from 'react';

class App1 extends Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        this.increment = this.increment.bind(this);
    }

    increment() {
        this.setState({ count: this.state.count + 1 });
    }

    render() {
        return (
            <div>
                <center>
                    <h1>Count: {this.state.count}</h1>
                    <button onClick={this.increment}>Increment</button>
                </center>
            </div>
        );
    }
}

export default App1;