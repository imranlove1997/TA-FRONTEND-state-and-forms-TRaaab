import React from "react";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
        }
    }
    handleFivetimes = () => {
        this.setState({
            counter: this.state.counter + 5,
        });
    }
    handleTentimes = () => {
        this.setState({
            counter: this.state.counter + 10,
        });
    }
    handleFiftimes = () => {
        this.setState({
            counter: this.state.counter + 15,
        });
    }
    handleHuntimes = () => {
        this.setState({
            counter: this.state.counter + 100,
        });
    }
    handleTwotimes = () => {
        this.setState({
            counter: this.state.counter + 200,
        });
    }
    handleIncrement = () => {
        this.setState({
            counter: this.state.counter + 1,
        });
    }
    handleDecrement = () => {
        this.setState(prevState => 
        ({counter: prevState.counter? prevState.counter - 1: 0})
    )}
    handleReset = () => {
        this.setState({
            counter: 0,
        });
    }
    render() {
        return (
            <>
            <h2>Counter App with Steps</h2>
            <h3>{this.state.counter}</h3>
            <h4>Steps</h4>
            <button onClick={this.handleFivetimes} className="steps">5</button>
            <button onClick={this.handleTentimes} className="steps">10</button>
            <button onClick={this.handleFiftimes} className="steps">15</button>
            <h2>Counter App with Steps and Max Value</h2>
            <div className="stepscontent">
            <h4>Steps</h4>
            <h4>Max Value</h4>
        </div>
            <button onClick={this.handleFivetimes} className="steps">5</button>
            <button onClick={this.handleTentimes} className="steps">10</button>
            <button onClick={this.handleFiftimes} className="steps">15</button>
            <button onClick={this.handleFiftimes} className="steps">15</button>
            <button onClick={this.handleHuntimes} className="steps">100</button>
            <button onClick={this.handleTwotimes} className="steps">200</button>
            <div className="content">
            <button onClick={this.handleIncrement}>Increment</button>
            <button onClick={this.handleDecrement}>Decrement</button>
            <button onClick={this.handleReset}>Reset</button>
        </div>
            </>
        );
    }
}

export default App;