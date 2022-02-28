import React from "react";
import data from "../data";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            activeQuestion: '',
        }
    }
    render() {
        return (
            <>
            <h2>Close State</h2>
                {
                    data.map((question) => (
                        
                        <div className="acordion-close">
                        <h3>{question.Q}</h3>
                        <i class="fa-regular fa-hand-point-down"></i>
                        </div>
        ))
                }
                <hr />
                <h2>Open State</h2>
                {
                    data.map((question, i) => (
                        <>
                        <div key={i} className={this.state.activeQuestion === i ? "acordion-close green" : "acordion-close red"}>
                        <h3>{question.Q}</h3>
                        <i onClick={() => {
                            this.setState({
                                activeQuestion: this.state.activeQuestion === i ? '' : i
                            })
                        }} className={this.state.activeQuestion === i ? "fa-regular fa-hand-point-up" : "fa-regular fa-hand-point-down"}></i>
                        </div>
                        <p className={this.state.activeQuestion === i ? "view" : "hide"}>{question.A}</p>
                        </>
        ))
                }
                </>
        )
    }
}

export default App;